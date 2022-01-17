const User = require("../models/User.model");
const Category = require("../models/Category.model");


module.exports = {
   newCategory: async (req,res) => {
     try {
        if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
           throw new Error("Missing: request body content");
        }
        const newCat = new Category(req.body);
        const savedCat = await newCat.save();    
        res.status(201).json(savedCat);
     } 
     catch(e) {
        res.status(500).json({message: e.message});
     }
   },

   getCategory: async (req,res) => {
      try {
         const cats = await Category.find();
         res.status(200).json(cats);
      }
      catch(e) {
        res.status(500).json({message: e.message});
      }
   }
}
