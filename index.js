const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const logReqRes = require("./middleware");

const app = express();

// connect mongodb database
// mongoose.connect(
//   "mongodb+srv://AnuprajVarma:<db_password>@cluster0.jkktf.mongodb.net/"
// );

app.use(express.json()); // it is a middleware who put incoming data in body.

app.use(logReqRes()); // costom middleware

app.use("/user", userRoute);

// we can make this separate but making clean code so we make this routes

app.listen(8000, () => {
  console.log("server is started");
});
