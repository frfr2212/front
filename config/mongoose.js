const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://front:front2212@cluster0.70zs9xx.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", console.error.bind("error!!"));

db.once("open", function () {
  console.log("connected");
});

module.exports = db;
