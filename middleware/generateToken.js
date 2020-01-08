const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/config.js");

module.exports = user => {
  const jwtPayload = {
    subject: user.id,
    username: user.username,
  };

  const jwtOptions = {
    expiresIn: "1d",
  };

  return jwt.sign(jwtPayload, jwtSecret, jwtOptions);
};