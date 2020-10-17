const express = require('express');
const router = require('./router');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(router);
const port = 3000;
const bcrypt = require("bcrypt");
console.log(process.env.DATABASE_HOST); 
console.log(process.env.SECRET); 

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
const port =3000
app.listen(port, () => {
    console.log(`W8 ON at http://localhost:${port}`);
  });

