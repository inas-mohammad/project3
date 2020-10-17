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

// getting environment variables
const SECRET = process.env.SECRET;
const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION;

// generating a new token
const generateToken = () => {
  // the payload that will be sent to the client-side
  const payload = {
    id: 1,
    permissions: ["r", "w"],
    type: "user",
  };

  const options = {
    expiresIn: TOKEN_EXPIRATION,
  };
  return jwt.sign(payload, SECRET, options);
};

const authenticateToken = (token) => {
  // verifying the token by using the secret key
  const parsedToken = jwt.verify(token, SECRET);
  // checking if the information in the parsed token exist in the database
}
const port =3000
app.listen(port, () => {
    console.log(`W8 ON at http://localhost:${port}`);
  });

