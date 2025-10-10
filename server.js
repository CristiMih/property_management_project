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

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const filePath = path.join(folderPath, "users.txt");

  const data = fs.readFileSync(filePath, "utf-8");
  const users = JSON.parse(data);

  const foundUser = users.find(u => u.user === username && u.password === password);

  if (!foundUser) {
    return res.status(401).json({ success: false, message: "Username sau parola incorecta!" });
  }

  const userFolder = path.join(folderPath, username);
  const portfolioFilePath = path.join(userFolder, 'portfolio.txt');

  
  if (!fs.existsSync(userFolder)) {
    fs.mkdirSync(userFolder);
  }

  let portfolio = {};

  if (fs.existsSync(portfolioFilePath)) {
    const portfolioData = fs.readFileSync(portfolioFilePath, 'utf8');
    portfolio = JSON.parse(portfolioData);
  } else {
    portfolio = {
      username: username,
      properties: []
    };
    fs.writeFileSync(portfolioFilePath, JSON.stringify(portfolio, null, 2));
  }

  res.json({
    success: true,
    message: "Logare reusita!",
    user: foundUser,
    portfolio
  });
});

app.get("/loadUsers", (req, res) => {
  const filePath = path.join(folderPath, "users.txt");

  const data = fs.readFileSync(filePath, "utf-8");

  let users = [];

  users = JSON.parse(data);

  res.json({success: true, message: "Success!", users});

})

app.get("/loadPortfolio/:username", (req, res) => {
  const username = req.params.username;
  const filePath = path.join(folderPath, username, 'portfolio.txt');

  if (!fs.existsSync(filePath)) {
    const initialData = {
      username: username,
      properties: []
    };

    fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2));
    return res.status(201).json({ message: 'portfolio.txt created', portfolio: initialData });
  }

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const portfolio = JSON.parse(data);
    res.json({ portfolio });
  } catch (error) {
    res.status(500).json({ message: 'Error reading or parsing portfolio file.' });
  }
});

app.post("/createProperty/:username", (req, res) => {
  const username = req.params.username;
  const content = req.body.content;
  const filePath = path.join(folderPath, username, "portfolio.txt");

  if (!content || !content.name || !content.address || !content.type || !content.priority) {
    return res.status(400).json({ message: "Error: Missing required fields." });
  }

  let portfolio = { username, properties: [] };

  if (fs.existsSync(filePath)) {
    const existingData = fs.readFileSync(filePath, 'utf-8');
    try {
      portfolio = JSON.parse(existingData);
      if (!portfolio.properties || !Array.isArray(portfolio.properties)) {
        portfolio.properties = [];
      }
    } catch (err) {
      return res.status(500).json({ message: "Error reading existing portfolio." });
    }
  }

  const newProperty = {
    name: content.name,
    address: content.address,
    type: content.type,
    priority: content.priority
  };

  portfolio.properties.push(newProperty);

  fs.writeFileSync(filePath, JSON.stringify(portfolio, null, 2));

  const folderName = newProperty.name.split(" ")[0];
  const propertyFolderPath = path.join(folderPath, folderName);
  if (!fs.existsSync(propertyFolderPath)) {
    fs.mkdirSync(propertyFolderPath);
  }

  res.json({ message: `Property created successfully!` });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

