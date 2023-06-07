const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  is_active: {
    type: Boolean,
    required: false,
    default: true,
  },
});

// TELLING MONGOOSE THAT IT IS A MODEL
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
