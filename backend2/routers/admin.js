const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/is_logged_in");
const adminCon = require("../controllers/admin");
const more_upload = require("../utils/more_upload");
const { deserializeUser } = require("../middleware/deserializeUser");

router.post("/createsallertype", deserializeUser, adminCon.createSallerType);
router.post(
  "/createdepartment",
  deserializeUser,
  more_upload.single("departmentImage"),
  adminCon.createDepartment
);
router.post(
  "/createcategory",
  deserializeUser,
  more_upload.single("categoryImage"),
  adminCon.createCategory
);
router.post(
  "/createsubcategory",
  deserializeUser,
  more_upload.single("subCategoryImage"),
  adminCon.createSubCategory
);
router.post(
  "/createitem",
  deserializeUser,
  more_upload.single("itemImage"),
  adminCon.createItem
);

router.get(
  "/fetchallsallertypes",
  deserializeUser,
  adminCon.fetchAllSallerTypes
);
router.post(
  "/fetchalldepartments",
  deserializeUser,
  adminCon.fetchAllDepartments
);
router.get(
  "/fetchalldepartmentsforadmin",
  deserializeUser,
  adminCon.fetchAllDepartmentsforadmin
);
router.post(
  "/fetchallcategories",
  deserializeUser,
  adminCon.fetchAllCategories
);

router.get(
  "/fetchallcategoryforadmin",
  deserializeUser,
  adminCon.fetchAllCategoriesforadmin
);

router.post(
  "/fetchallsubcategories",
  deserializeUser,
  adminCon.fetchAllSubCategories
);
router.get(
  "/fetchallsubcategoryforadmin",
  deserializeUser,
  adminCon.fetchAllSubCategoriesforadmin
);

router.post("/fetchallitems", deserializeUser, adminCon.fetchAllItems);

router.post("/publicfetchAllDepartment", adminCon.fetchAllDepartments);
router.post("/publicfetchallcategories", adminCon.fetchAllCategories);
router.post("/publicfetchallsubcategories", adminCon.fetchAllSubCategories);

module.exports = router;
