const Router = require("express").Router();
const User = require("../models/User.model");
const {updateUser,deleteUser, getUser} = require("../controllers/user.controller");

// Update user
Router.get("/:id", getUser);
Router.put("/:id", updateUser);
Router.delete("/:id", deleteUser);

module.exports = Router;
