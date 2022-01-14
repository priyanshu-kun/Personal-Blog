const Router = require("express").Router();
const User = require("../models/User.model");
const {register, login} = require("../controllers/user.controller");

// Register user
Router.post("/register", register);
Router.post("/login", login);

module.exports = Router;
