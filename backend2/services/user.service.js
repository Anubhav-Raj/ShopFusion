const { signJwt } = require("../utils/jwt");
const { omit } = require("lodash");
const User = require("../models/user");
const redisClient = require("../utils/connectRedis");
const excludedFields = ["password"];
//const redis = require("redis");

// CreateUser service
exports.createUser = async (input) => {
  const user = await User.create(input);
  return omit(user.toJSON(), excields);
};

// Find All users
exports.findAllUsers = async () => {
  return await User.find();
};

// Find one user by any fields
exports.findUser = async (query, options = {}) => {
  return await User.findOne(query, {}, options).select("+password");
};

exports.findUserById = async (id) => {
  const user = await User.findById(id).lean();
  return omit(user, excludedFields);
};

exports.findAndUpdateUser = async (query, update, options) => {
  return await User.findOneAndUpdate(query, update, options);
};

exports.signToken = async (user) => {
  // Sign the access token
  const access_token = signJwt({ sub: user._id }, "accessTokenPrivateKey", {
    expiresIn: `${process.env.accessTokenExpiresIn}m`,
  });

  // Sign the refresh token
  const refresh_token = signJwt({ sub: user._id }, "refreshTokenPrivateKey", {
    expiresIn: `${process.env.refreshTokenExpiresIn}m`,
  });
  //console.log("user", user);
  // Store user session in Redis
  const userForRedis = { ...user, _id: user._id.toString() };
  // Now, you can store 'userForRedis' in Redis
  redisClient.set(
    user._id.toString(),
    JSON.stringify(userForRedis),
    {
      ex: 60 * 60, // 60 minutes * 60 seconds = 1 hour
    },
    (error, result) => {
      if (error) {
        console.error("Error setting data in Redis:", error);
      } else {
        console.log("Data set successfully in Redis:", result);
      }
    }
  );
  // Return access token
  return { access_token, refresh_token };
};
