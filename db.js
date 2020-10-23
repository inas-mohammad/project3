const mongoose = require("mongoose");

const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema);

onst userModel = require("./userSchema");

// creating a new user
const user = new userModel({
  email: "user3@gmail.com",
  name: "user3",
  password: "12345678",
  phoneNumber: 0770978765,
});


user
  .save()
  .then((result) => {
   
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

userModel
  .find({
    y
    email: "user2@gmail.com",
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });