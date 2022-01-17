const User = require("../models/User.model");
const Post = require("../models/Post.model");
const bcrypt = require("bcrypt");

module.exports = {

    createPost: async (req,res) => {
       try {
         if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
            throw new Error("Missing: request body content");
         }
         const newPost = new Post(req.body);
         const savePost = await newPost.save();
         res.status(201).json(savePost);
       } 
       catch(e) {
            res.status(500).json({message: e.message});
       }
    },

   updatePost: async (req,res) => {
      try {
         const post = await Post.findById(req.params.id)
         if(post.username === req.body.username) {
            try {
               const updatePost = await Post.findByIdAndUpdate(req.params.id, {
                  $set: req.body
               }, {new: true})
               res.status(201).json(updatePost);
            }
            catch(e) {
               res.status(500).json({message: e.message});
            }
         }
         else {
            res.status(401).json({message: "You can update only your post"});
         }
      } 
      catch(e) {
         res.status(500).json({message: e.message});
      }
   },

   deletePost: async (req,res) => {
      try {
         const post = await Post.findById(req.params.id);
         if(post.username === req.body.username) {
            try {
               await post.delete();
               res.status(200).json({message: "Post has been deleted..."});
            }
            catch(e) {
               res.status(500).json({message: e.message});
            }
         }
         else {
            res.status(401).json({message: "You can only delete your post"});
         }
      }
      catch(e) {
         res.status(500).json({message: e.message});
      }
   },

   getPost: async (req,res) => {
      try {
         const post = await Post.findById(req.params.id);
         if(!post) {
            throw new Error("Cannot able to find the post!");
         }
         res.status(200).json(post);
      }
      catch(e) {
         res.status(500).json({message: e.message});
      }
   },
/*
 * ?username=name
 * ?cat=music
 * ?limit=10
 * ?skip=10
 * ?sort=createdAt:asc
   * */
   getAllPost: async (req,res) => {
      const username = req.query.user;
      const catName = req.query.cat;
      let parts = [];
      try {
         let posts;

         if(req.query.sort) {
            parts = req.query.sort.split(":")
         }

         if(username) {
            posts = await Post.find({username})
            .limit(parseInt(req.query.limit ? req.query.limit: 10))
            .skip(parseInt(req.query.skip ? req.query.skip: 0))
           .sort([[parts.length ? parts[0]: 'createdAt', parts.length ? parts[1] === 'asc'? 1: -1: 1]])

         }

         else if(catName) {
            posts = await Post.find({categories: {
               $in: [catName]
            }})
            .limit(parseInt(req.query.limit ? req.query.limit: 10))
            .skip(parseInt(req.query.skip ? req.query.skip: 0))
           .sort([[parts.length ? parts[0]: 'createdAt', parts.length ? parts[1] === 'asc'? 1: -1: 1]])
         }

         else {
            posts = await Post.find()
            .limit(parseInt(req.query.limit ? req.query.limit: 10))
            .skip(parseInt(req.query.skip ? req.query.skip: 0))
           .sort([[parts.length ? parts[0]: 'createdAt', parts.length ? parts[1] === 'asc'? 1: -1: 1]])
         }

         res.status(200).json(posts);
      }

      catch(e) {
         res.status(500).json({message: e.message});
      }
   }
}
