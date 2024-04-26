const jwt = require("jsonwebtoken");
const config = require("config");

exports.signJwt = (payload, key, options = {}) => {
  const privateKey = Buffer.from(config.get(key), "base64").toString("ascii");
  return jwt.sign(payload, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};

exports.verifyJwt = (token, key) => {
  try {
    const publicKey = Buffer.from(config.get(key), "base64").toString("ascii");
    return jwt.verify(token, publicKey);
  } catch (error) {
    return null;
  }
};
