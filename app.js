const express = require("express");
const db = require('./db');
require('dotenv').config();
const todoModel = require("./schema");
const router = require("./router");
require("dotenv").confige();
const db = require("./db");
app.use(router);
const app = express();
app.use(express.json());
app.use (routrer);
app.get("/todos", (req, res) => {});
app.post("/create/todo", (req, res) => {});
app.put("/update/todo", (req, res) => {});
app.delete("/delete/todo", (req, res) => {});
const bcrypt = require("bcrypt");
console.log(process.env.DATABASE_HOST); 
console.log(process.env.SECRET); 
const { users, roles } = require('./models');

 password => my_secure_password
 salt => 21
bcrypt.hash(password, salt, (err, hash) => {
    
});
  
  
  bcrypt.compare(password, hashedPassword, (err, result) => {

  });
  const jwt = require("jsonwebtoken");


const SECRET = process.env.SECRET;
const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION;


const generateToken = () => {
  
  const payload = {
   
  };

  const options = {
    expiresIn: TOKEN_EXPIRATION,
  };
  return jwt.sign(payload, SECRET, options);
};

const authenticateToken = (token) => {

  const parsedToken = jwt.verify(token, SECRET);

  const register = async (user) => {
    console.log('USER: ', user);
   
    const savedUser = users.filter((u) => u.email === user.email);

    if (savedUser.length === 0) {
      
      const newUser = user;
     
      newUser.id = 2;
    
      newUser.password = await bcrypt.hash(
        user.password,
        Number(process.env.SALT)
      );
      
      users.push(newUser);
     
      return newUser;
  
    } else {
      
      return 'User already exists';
    }
    
    
  };
  
  const login = async (user) => {
    const savedUser = users.filter((u) => u.email === user.email);
  
    if (savedUser.length === 0) {
      return 'User Not Found please register';
    } else {
     
      if (await bcrypt.compare(user.password, savedUser[0].password)) {
        
        const savedPermission = roles.filter((p) => p.id === savedUser[0].role_id);
  
        const payload = {
          email: savedUser[0].email,
          permissions: savedPermission[0].permissions,
        };
  
        const options = {
          expiresIn: process.env.TOKEN_EXPIRATION,
        };
        
        return await jwt.sign(payload, process.env.SECRET, options);
        
      } else {
        return 'Username or password not correct';
      }
    }
    
  };
  
  const getUsers = () => {
    return users;
  };
  
  module.exports = {
    register,
    login,
    getUsers,
  };
  

  app.post('/video', (req, res) => {
    console.log('12 => POST /video');
    console.log('REQ.Body: ', req.body);
    const newvideo = { email: req.body.newEmail, userName:req.body.newUserName , passWord:req.body.newPassWord };
    data.push(newVideo);
  ​
   
    res.json(
      `the number of video after adding new user are ${data.length}`
    );
  });
  
  app.get('/video', (req, res) => {
    console.log('23 => GET /video');
    res.send(data);
  });
  
  \
  app.delete('/veideo/first', (req, res) => {
    console.log('24 =>  DELETE /students/first');
    data.shift();
    
  });
}
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});