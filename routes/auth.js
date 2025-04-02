const express = require("express");
const { signUpPage, handleSignUp } = require("../controllers/auth");

const router = express.Router();

router.get("/", signUpPage);
router.post("/signup", handleSignUp);

module.exports = router;
