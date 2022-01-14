//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = "mongodb://localhost:27017/blog";
mongoose
    .connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then("db is connected");

//Get the default connection
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

