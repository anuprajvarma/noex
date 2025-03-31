const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.end("home page");
});

app.get("/about", (req, res) => {
  return res.end("about page");
});

app.listen(8000, () => {
  console.log("server is started");
});
