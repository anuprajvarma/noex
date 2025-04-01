const logReqRes = () => {
  return (req, res, next) => {
    console.log("middleware");
    next();
  };
};

module.exports = logReqRes;
