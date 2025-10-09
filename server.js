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

  console.log(users, "suntem si aici");
  users.push(newUser);
  console.log(users, "suntem aici");

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  const userFolderPath = path.join(folderPath, newUser.user);
   fs.mkdirSync(userFolderPath);

  res.json({ message: `User created successfully!` });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));