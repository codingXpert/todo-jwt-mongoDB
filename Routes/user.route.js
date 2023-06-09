const express = require("express");
const router = require('express').Router();
const userController = require("../controllers/user.controller");

router.post("/create", userController.createUser);
router.get("/getSingleUser/:id", userController.getSingleUser);
router.get("/getAllUsers", userController.getAllUsers);



module.exports = router;
