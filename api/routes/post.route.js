const Router = require("express").Router();
const User = require("../models/User.model");
const {createPost,getAllPost, updatePost, deletePost, getPost} = require("../controllers/post.controller");

// Update user
Router.post("/", createPost);
Router.put("/:id", updatePost);
Router.delete("/:id", deletePost);
Router.get("/", getAllPost);
Router.get("/:id", getPost);

module.exports = Router;
