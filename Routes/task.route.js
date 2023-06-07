const express = require("express");
const router = require("express").Router();
const taskController = require("../controllers/task.controller");

router.post("/create", taskController.createTask);
router.get("/get/:id", taskController.getSingleTask);
router.get("/list", taskController.getAllTask);
router.put("/update" , taskController.updateTask)
module.exports = router;
