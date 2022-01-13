const Router = require("express").Router();
const User = require("../models/User.model");
const {register} = require("../controllers/user.controller");

// Register user
Router.post("/register", register);
