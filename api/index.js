const express = require("express");
require("./DB/connect.db");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user.route");
const postRoutes = require("./routes/post.route");
const categoryRoutes = require("./routes/category.route");
const {urlencoded, json} = require("express");
const app = express();
const multer = require("multer");
dotenv.config();
app.use(json());
app.use(urlencoded({extended: false}));


const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"images")
    },
    filename: (req, file, cb) => {
        cb(null,req.body.name);
    }
})


const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("File has been uploaded");
});


app.use("/api/user/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/post",postRoutes);
app.use("/api/category",categoryRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("my cool app is live now on port: ", port);
})
