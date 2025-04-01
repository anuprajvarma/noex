const express = require("express");
const {
  handleuser,
  getuser,
  postUser,
  patchUser,
  deleteUser,
} = require("../controllers/user");

const router = express.Router();

router.get("/", handleuser);

router
  .route("/:id")
  .get(getuser)
  .post(postUser)
  .patch(patchUser)
  .delete(deleteUser);

module.exports = router;
