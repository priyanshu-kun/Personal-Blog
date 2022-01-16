const Router = require("express").Router();
const User = require("../models/User.model");
const {updateUser,deleteUser} = require("../controllers/user.controller");

// Update user
Router.put("/:id", updateUser);
Router.delete("/:id", deleteUser);

module.exports = Router;
