const jwt = require("jsonwebtoken");
require("dotenv").config();

function signToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES || "8h",
  });
}

module.exports = { signToken };