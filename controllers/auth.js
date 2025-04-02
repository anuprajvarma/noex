const signUpPage = (req, res) => {
  return res.render("auth");
};

const handleSignUp = (req, res) => {
  console.log(req);
  return res.redirect("/");
};

const handleLogin = (req, res) => {
  return res.render("auth");
};

module.exports = { signUpPage, handleLogin, handleSignUp };
