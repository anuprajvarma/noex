const handleuser = (req, res) => {
  return res.render("home");
};

const getuser = (req, res) => {
  return res.send("home page");
};

const postUser = (req, res) => {
  return res.send("home page");
};
const patchUser = (req, res) => {
  return res.send("home page");
};
const deleteUser = (req, res) => {
  return res.send("home page");
};

module.exports = { handleuser, getuser, deleteUser, patchUser, postUser };
