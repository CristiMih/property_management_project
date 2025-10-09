const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const folderPath = "./server";

app.use(cors());
app.use(express.json());

if(!fs.existsSync(folderPath)){
  fs.mkdirSync(folderPath);
}

app.post("/createUser", (req, res) => {
  const content = req.body.content;

  if (!content || !content.name || !content.user || !content.email || !content.password || !content.id) {
    return res.status(400).json({ message: "Error: Missing required fields." });
  }

  const fileName = `users.txt`;
  const filePath = path.join(folderPath, fileName);

  let users = [];
  if (fs.existsSync(filePath)) {
    const existingData = fs.readFileSync(filePath, 'utf-8');
    try {
      users = existingData.trim() === "" ? [] : JSON.parse(existingData);
      if (!Array.isArray(users)) {
        users = [];
      }
    } catch (err) {
      return res.status(500).json({ message: "Error reading existing users." });
    }
  }

  const newUser = {
    name: content.name,
    user: content.user,
    email: content.email,
    password: content.password,
    admin: content.admin,
    id: content.id
  };

  users.push(newUser);

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  const userFolderPath = path.join(folderPath, newUser.user);
  fs.mkdirSync(userFolderPath);

  res.json({ message: `User created successfully!` });
});

app.post("/login", (req, res) =>{
  const{ username, password} = req.body;
  const filePath = path.join(folderPath, "users.txt");
  
  const data = fs.readFileSync(filePath, "utf-8");
  let users = [];

  users = JSON.parse(data);
  
  const foundUser = users.find(u => u.user === username && u.password === password);

  if(foundUser){
    res.json({success: true, message: "Logare reusita!", user: foundUser});
  } else {
    res.status(401).json({succes:false, message: "Username sau parola incorecta!"});
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));