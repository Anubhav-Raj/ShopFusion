const express = require("express");
const {
  loginHandler,
  logoutHandler,
  refreshAccessTokenHandler,
  registerHandler,
} = require("../controllers/auth.controller");
const { deserializeUser } = require("../middleware/deserializeUser");
const { requireUser } = require("../middleware/requireUser");
const { validate } = require("../middleware/validate");
const { createUserSchema, loginUserSchema } = require("../schema/user.schema");
const express = require("express");

const router = express.Router();

// Register user route
router.post("/register", validate(createUserSchema), registerHandler);

// Login user route
router.post("/login", validate(loginUserSchema), loginHandler);

// Refresh access token route
router.get("/refresh", refreshAccessTokenHandler);

// Logout User
router.get("/logout", deserializeUser, requireUser, logoutHandler);

module.exports = router;
