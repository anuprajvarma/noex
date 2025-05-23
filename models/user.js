const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

// Model
const user = mongoose.model("user", userSchema);

module.exports = user;
