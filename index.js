const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const logReqRes = require("./middleware");

const app = express();

// connect mongodb database
mongoose
  .connect(
    "mongodb+srv://anupraj1854:mBjTePxEoMTkwcMj@users.aa6whd2.mongodb.net/?retryWrites=true&w=majority&appName=users"
  )
  .then(console.log("mongodb server connect"));

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // it is a middleware who put incoming data in body.

app.use(logReqRes()); // costom middleware

// tell the express which view engine i'm using
app.set("view engine", "ejs");

app.set("views", path.resolve("./views"));

app.use("/auth", authRoute);

app.use("/", userRoute);

// we can make this separate but making clean code so we make this routes

app.listen(8000, () => {
  console.log("server is started");
});
