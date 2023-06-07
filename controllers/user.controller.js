const User = require("../models/user.model");

//1. create user
const createUser = async (req, res) => {
  try {
    const findUser = await User.find({ name: req.body.name });
    if (findUser.name === req.body.name) {
      let user = await User.create(req.body);
      res.status(200).send(user);
    } else {
      res.status(200).json("User Already Exists");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//2. get single user
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
    });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(400).json("No User Found By This Id");
    }
  } catch (error) {
    res.status(200).send(error.message);
  }
};

//3. get all users
const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(400).json("Error while fetching the users");
    }
  } catch (error) {
    res.status(200).send(error.message);
  }
};

module.exports = {
  createUser,
  getSingleUser,
  getAllUsers,
};
