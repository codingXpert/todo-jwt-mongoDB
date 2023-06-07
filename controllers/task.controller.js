const Task = require("../models/task.model");

//1. create task
const createTask = async (req, res) => {
  try {
    let task = await Task.create(req.body);
    res.status(200).send(task);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//2. get single user
const getSingleTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: { id: req.params.id },
    });
    if (task) {
      res.status(200).send(task);
    } else {
      res.status(400).json("No Task Found By This Id");
    }
  } catch (error) {
    res.status(200).send(error.message);
  }
};

//3. get all users
const getAllTask = async (req, res) => {
  try {
    const task = await User.find({});
    if (task) {
      res.status(200).send(task);
    } else {
      res.status(400).json("Error while fetching the task");
    }
  } catch (error) {
    res.status(200).send(error.message);
  }
};

/*update task */
const updateTask = (req, res) => {
  res.status(200).send("hello from controller");
};


/*delete task */

const deleteTask = (req ,res ) => {
  res.send("Hello from task controller :: delete" );
}


module.exports = {
  createTask,
  getSingleTask,
  getAllTask,
  updateTask,
};
