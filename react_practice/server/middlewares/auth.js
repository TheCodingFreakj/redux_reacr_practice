const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token"); //this is the key which have token sent

  // Check if not token
  if (!token) {
    return res
      .status(401)
      .json({ msg: "No token, You are not authorized to enter this route" });
  } //This fires when token is not atal present

  // Verify token
  try {
    const decoded = jwt.verify(
      token,
      config.get("jwtSecret"),
      (error, decoded) => {
        if (error) {
          return res.status(401).json({
            //This fires when token is mutated
            msg: "This token with which you want to access is not correct",
          });
        } else {
          req.user = decoded.user; //this is the payout // we can use this req.user that had verified token in any of the routes
          next();
        }
      }
    );
  } catch (err) {
    console.error("something wrong with auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};
