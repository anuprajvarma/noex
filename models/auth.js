const mongoose = require("mongoose");

//schema
const authSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

// Model
const authModel = mongoose.model("user", userSchema);

module.exports = authModel;
