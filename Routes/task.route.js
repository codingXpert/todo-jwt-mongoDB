const express = require("express");
const router = require("express").Router();
const taskController = require("../controllers/task.controller");

router.post("/create", taskController.createTask);
router.get("/getSingleTask/:id", taskController.getSingleTask);
router.get("/getAllTask", taskController.getAllTask);

module.exports = router;
