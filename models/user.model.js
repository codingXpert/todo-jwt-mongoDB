const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  }
});


// TELLING MONGOOSE THAT IT IS A MODEL
const User = mongoose.model('User' , userSchema);

module.exports = User;
