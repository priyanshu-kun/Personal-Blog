const express = require("express");
require("./DB/connect.db");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user.route");
const {urlencoded, json} = require("express");
const app = express();
dotenv.config();
app.use(json());
app.use(urlencoded({extended: false}));


app.use("/api/user/auth",authRoutes);
app.use("/api/user",userRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Your cool app is live now!");
})
