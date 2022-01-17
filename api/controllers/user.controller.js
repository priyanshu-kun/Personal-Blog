const User = require("../models/User.model");
const bcrypt = require("bcrypt");

module.exports = {
    register: async (req,res) => {
       try {
            const {username, email, password} = req.body;            
            if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
               throw new Error("Missing: request body content");
            }
            const encryptedPassword = await bcrypt.hash(password, 12);
            const newUser = new User(
               {
                  username,
                  email,
                  password: encryptedPassword
               }
            );
            const user = await newUser.save();
            res.status(200).json(user);
       } 
       catch(e) {
            res.status(500).json({message: e.message});
       }
    },
   login: async (req,res) => {
         try {
            if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
               throw new Error("Missing: request body content");
            }
            const {loginKey, password} = req.body;
            const user = await User.findOne({
                  $or: [
                      { email: loginKey },
                      { username: loginKey },
                  ],
              });
            if(!user) {
                throw new Error("Email or password doesn't match");
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new Error("Email or password doesn't match");
            }
            const {password: _password, ...others} = user._doc;
            res.json(others);
         } 
         catch(e) {
            res.status(500).json({message: e.message});
         }
   },

   updateUser: async (req,res) => {
      if(req.body.userId === req.params.id) {
         try {
            if(req.body.password) {
              req.body.password = await bcrypt.hash(req.body.password, 12); 
            }
            const updatedUser = await User.findByIdAndUpdate({
               $set: req.body
            })
            res.status(200).json(updatedUser);
         }
         catch(e) {
            res.status(401).json({message: e.message});
         }
      }
      else {
         res.status(500).json({message: "Internal Server Error"});
      }
   },

   deleteUser: async (req,res) => {
      try {


      }
      catch(e) {

      }
   }
}
