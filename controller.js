const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users, roles } = require('./models');

const register = async (user) => {
  console.log('USER: ', user);
  // check if the user exist in the database
  const savedUser = users.filter((u) => u.email === user.email);
  // check if this array os empty or notify
  if (savedUser.length === 0) {
    // create new usernew user
    const newUser = user;
    // add id 2 (normal user)
    newUser.id = 2;
    // hash the password (wait till it is ready)
    newUser.password = await bcrypt.hash(
      user.password,
      Number(process.env.SALT)
    );
    // add the new user to the db
    users.push(newUser);
    // return the new user to the client () res
    return newUser;
    // return 'Create new user successfully'
  } else {
    // old user
    return 'User already exists';
  }
  /*
   [{
     email: "user3@gmail.com",
     password: "$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C",
     role_id: 2,
   }],
    */
  
};

const login = async (user) => {
  const savedUser = users.filter((u) => u.email === user.email);

  if (savedUser.length === 0) {
    return 'User Not Found please register';
  } else {
    // check if the password is correct password
    //              the normal password, the hash ppasword
    if (await bcrypt.compare(user.password, savedUser[0].password)) {
      // return token
      const savedPermission = roles.filter((p) => p.id === savedUser[0].role_id);

      const payload = {
        email: savedUser[0].email,
        permissions: savedPermission[0].permissions,
      };

      const options = {
        expiresIn: process.env.TOKEN_EXPIRATION,
      };
      // jwt.sign(data,secret ket,options)
      return await jwt.sign(payload, process.env.SECRET, options);
      // return 'Login successfully'
    } else {
      return 'Username or password not correct';
    }
  }
  /* 
 [{
    email: 'user3@gmail.com',
    // 123456
    password: '$2b$10$6tjuguXB.uejxRZz6syZ1O.aEK8EKf9kA/cnvZJ6mOs6cl0bSrnJ.',
    role_id: 2,
  }]
   */
};

const getUsers = () => {
  return users;
};

module.exports = {
  register,
  login,
  getUsers,
};