const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // Verify token, returns the payload which in our case is
    // a user object with an id
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // We assign our payload to req.user
    req.user = decoded.user;

    // And then call next to move on
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
