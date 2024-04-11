const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/is_logged_in");
const productCon = require("../controllers/product");
const more_upload = require("../utils/more_upload");
const { deserializeUser } = require("../middleware/deserializeUser");

router.post(
  "/createproduct",
  deserializeUser,
  more_upload.fields([
    { name: "uploadPhotos", maxCount: 5 },
    { name: "uploadVideo", maxCount: 1 },
    { name: "uploadFile", maxCount: 1 },
  ]),
  productCon.createProduct
);
router.post(
  "/createMobile",
  deserializeUser,
  more_upload.fields([
    { name: "uploadPhotos", maxCount: 5 },
    { name: "uploadVideo", maxCount: 1 },
    { name: "uploadFile", maxCount: 1 },
  ]),
  productCon.createMobile
);
router.post(
  "/editmobile",
  deserializeUser,
  more_upload.fields([
    { name: "uploadPhotos", maxCount: 5 },
    { name: "uploadVideo", maxCount: 1 },
    { name: "uploadFile", maxCount: 1 },
  ]),
  productCon.editmobile
);
//router.post("/createbrand", productCon.createBrand);

router.post("/deletemobile", deserializeUser, productCon.deletemobile);
router.get("/allbrands", deserializeUser, productCon.getAllBrands);
router.post("/allmodelsonmodel", deserializeUser, productCon.getModels);
router.get("/userallproduct", deserializeUser, productCon.userAllProduct);
router.get("/getallproduct", productCon.getAllProduct);

router.post(
  "/createbrand",
  more_upload.array("brandImage"),
  productCon.createBrand
);
router.post("/createbrandmodal", deserializeUser, productCon.createBrandmodal);
router.get("/fetchallBrand", deserializeUser, productCon.getAllBrands);
router.post(
  "/fetchcategoriesbrands",
  deserializeUser,
  productCon.getcategoriesBrand
);
router.post("/fetchallbrandmodal", deserializeUser, productCon.getModels);
router.get(
  "/subcategoriesProducts/:id",
  productCon.fetchAllSubCategoriesproduct
);
router.post("/sallerReviews", deserializeUser, productCon.sallerReview);
router.get("/getsallerReviews/:id", productCon.getsellerReview);
router.get("/getproductReviews/:id", productCon.getproductReview);
router.post("/productReviews", deserializeUser, productCon.productReview);

// get products based on category
router.get("/getProductsByCategory/:id", productCon.getAllProductsInCategory);

// get products based on subcategory
router.get(
  "/getProductsBySubCategory/:id",
  productCon.getAllProductsInSubCategory
);

// get products based on department
router.get(
  "/getProductsByDepartment/:id",
  productCon.getAllProductsInDepartment
);
module.exports = router;
