const express = require("express");
require("./DB/connect.db");
const dotenv = require("dotenv");
const app = express();
dotenv.config();


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Your cool app is live now!");
})
