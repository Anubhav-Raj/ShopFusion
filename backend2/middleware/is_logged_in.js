const jwt = require("jsonwebtoken");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");

exports.protect = asyncHandler(async (request, response, next) => {
  let token;
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = request.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.SECRET);
      request.user = await User.findById(decode.id)
        .select("-password")
        .populate("addresses");
      // .populate("products")
      // .populate({
      //   path: "products",
      //   populate: { path: "enterAddress", model: "Address" },
      // });
      // popunlate inside the product modal of enterAddress
      next();
    } catch (error) {
      console.error(error);
      response.status(401).json({ message: "Not Authorized, Token Failed" });
    }
  }

  if (!token) {
    response.status(401).json({ message: "Not Authorized, No Token Provided" });
  }
});
