// import { verifyJwt } from "../utils/jwt";
// import { findUserById } from "../services/user.service";
// import redisClient from "../utils/connectRedis";
const AppError = require("../utils/AppError");
const { verifyJwt } = require("../utils/jwt");
const { findUserById } = require("../services/user.service");
const redisClient = require("../utils/connectRedis");

exports.deserializeUser = async (req, res, next) => {
  try {
    // Get the
    // console.log(req.cookies);
    // console.log("backend seserialize user");
    let access_token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      access_token = req.headers.authorization.split(" ")[1];
      // console.log("authorization");
    } else if (req.cookies.access_token) {
      access_token = req.cookies.access_token;
      // console.log("cookies");
    }

    if (!access_token) {
      return next(new AppError("You are not logged in", 401));
    }
    // console.log("access_token_deserializer", access_token);
    // Validate Access Token
    const decoded = verifyJwt(access_token, "accessTokenPublicKey");
    // console.log("decoded", decoded);
    if (!decoded) {
      return next(new AppError(`Invalid token or user doesn't exist`, 401));
    }

    // Check if user has a valid session
    const session = await redisClient.get(decoded.sub);
    // console.log("session", session);

    if (!session) {
      return next(new AppError(`User session has expired`, 401));
    }

    // Check if user still exist
    const user = await findUserById(JSON.parse(session)._id);

    if (!user) {
      return next(new AppError(`User with that token no longer exist`, 401));
    }

    res.locals.user = user;

    // console.log("backend seserialize user End ");

    next();
  } catch (err) {
    next(err);
  }
};
