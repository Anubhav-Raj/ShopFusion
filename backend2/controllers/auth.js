const {
  getGoogleOauthToken,
  getGoogleUser,
} = require("../services/session.service");
const { findAndUpdateUser, signToken } = require("../services/user.service");
const origin = process.env.ORIGIN;
const axios = require("axios");

// Cookie options
const accessTokenCookieOptions = {
  expires: new Date(Date.now() + process.env.accessTokenExpiresIn * 60 * 1000),
  maxAge: process.env.accessTokenExpiresIn * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};

const refreshTokenCookieOptions = {
  expires: new Date(Date.now() + process.env.refreshTokenExpiresIn * 60 * 1000),
  maxAge: process.env.refreshTokenExpiresIn * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};

exports.googleOauthHandler = async (req, res, next) => {
  try {
    // Get the code from the query
    const code = req.query.code;
    const pathUrl = req.query.state || "/";
    if (!code) {
      return next(new AppError("Authorization code not provided!", 401));
    }
    // console.log(code);

    // Use the code to get the id and access tokens
    const { id_token, access_token } = await getGoogleOauthToken({ code });
    // console.log("id_token", id_token);
    // console.log("access_token", access_token);
    // Use the token to get the User
    const { name, verified_email, email, picture } = await getGoogleUser({
      id_token,
      access_token,
    });
    // console.log(name, verified_email, email, picture);

    // Check if user is verified
    if (!verified_email) {
      return next(new AppError("Google account not verified", 403));
    }

    // console.log(name, verified_email, email, picture);
    // Update user if user already exists or create new user
    const user = await findAndUpdateUser(
      { email },
      {
        name,
        photo: picture,
        email,
        provider: "Google",
        verified: true,
      },
      { upsert: true, runValidators: false, new: true, lean: true }
    );

    if (!user) {
      res.redirect(`${origin}${pathUrl}`);
    }

    // Create access and refresh token
    const { access_token: accessToken, refresh_token } = await signToken(user);
    // console.log(accessToken, refresh_token);
    // Send cookie
    res.cookie("access_token", access_token, accessTokenCookieOptions);
    res.cookie("refresh_token", refresh_token, refreshTokenCookieOptions);

    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });
    // res.status(200).json({
    //   status: "success",
    //   access_token,
    // });
    res.redirect(`${origin}${pathUrl}`);
  } catch (err) {
    console.log("Failed to authorize Google User", err);
  }
};

exports.loginHandler = async (req, res, next) => {
  const pathUrl = req.query.state || "/";

  try {
    // Get the user from the collection
    const user = await findUser({ email: req.body.email });
    console.log(user);
    // Check if user exists and password is correct
    if (
      !user ||
      !(await user.comparePasswords(user.password, req.body.password))
    ) {
      return next(new AppError("Invalid email or password", 401));
    }

    // Create the Access and refresh Tokens
    const { access_token, refresh_token } = await signToken(user);

    // Send Access Token in Cookie
    res.cookie("access_token", access_token, accessTokenCookieOptions);
    res.cookie("refresh_token", refresh_token, refreshTokenCookieOptions);
    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    // Send Access Token
    res.status(200).json({
      status: "success",
      access_token,
    });
  } catch (err) {
    next(err);
  }
};

const logout = (res) => {
  res.cookie("access_token", "", { maxAge: 1 });
  res.cookie("refresh_token", "", { maxAge: 1 });
  res.cookie("logged_in", "", { maxAge: 1 });
};

exports.logoutHandler = async (req, res, next) => {
  try {
    logout(res);
    res.status(200).json({ status: "success" });
  } catch (err) {
    next(err);
  }
};

exports.refreshAccessTokenHandler = async (req, res, next) => {
  try {
    // Get the refresh token from cookie
    const refresh_token = req.cookies.refresh_token;

    // Validate the Refresh token
    const decoded = verifyJwt(refresh_token, "refreshTokenPublicKey");

    const message = "Could not refresh access token";
    if (!decoded) {
      return next(new AppError(message, 403));
    }

    // Check if the user has a valid session
    const session = await redisClient.get(decoded.sub);
    if (!session) {
      return next(new AppError(message, 403));
    }

    // Check if the user exists
    const user = await findUserById(JSON.parse(session)._id);

    if (!user) {
      return next(new AppError(message, 403));
    }

    // Sign new access token
    const access_token = signJwt({ sub: user._id }, "accessTokenPrivateKey", {
      expiresIn: `${config.get("accessTokenExpiresIn")}m`,
    });

    // Send the access token as a cookie
    res.cookie("access_token", access_token, accessTokenCookieOptions);
    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    // Send response
    res.status(200).json({
      status: "success",
      access_token,
    });
  } catch (err) {
    next(err);
  }
};
