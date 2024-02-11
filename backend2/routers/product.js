const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/is_logged_in");
const more_upload = require("../utils/more_upload");

router.get("/addproduct", protect);
module.exports = router;
