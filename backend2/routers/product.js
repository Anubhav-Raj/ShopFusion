const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/is_logged_in");
const productCon = require("../controllers/product");
const more_upload = require("../utils/more_upload");

router.post(
  "/createMobile",
  protect,
  more_upload.fields([
    { name: "uploadPhotos", maxCount: 5 },
    { name: "uploadVideo", maxCount: 1 },
    { name: "uploadFile", maxCount: 1 },
  ]),
  productCon.createMobile
);
router.get("/allbrands", protect, productCon.getAllBrands);
router.post("/allmodelsonmodel", productCon.getModels);
router.get("/userallproduct", protect, productCon.userAllProduct);
module.exports = router;
