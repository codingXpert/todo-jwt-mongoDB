const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();
router.get("/get", userController.login);

// router.use("/task", require("./task.route"));

module.exports = router;
