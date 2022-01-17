const Router = require("express").Router();
const User = require("../models/User.model");
const {newCategory, getCategory} = require("../controllers/category.controller");

Router.get("/", getCategory);
Router.post("/", newCategory);

module.exports = Router;
