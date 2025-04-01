const express = require("express");

const app = express();

app.use(express.json()); // it is a middleware who put incoming data in body.

app.use((req, res, next) => {
  console.log("middlware");
  next();
}); // costom middleware

app.get("/", (req, res) => {
  return res.end("home page");
});

app
  .route("/about/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    return res.send(id);
  })
  .post((req, res) => {
    const id = Number(req.params.id);
    return res.send("pending");
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    return res.send("pending");
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    return res.send("pending");
  });

// we can make this separate but making clean code so we make this routes

app.listen(8000, () => {
  console.log("server is started");
});
