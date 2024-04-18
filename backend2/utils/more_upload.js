const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let destDir;
    console.log(file.fieldname);
    // Choose destination directory based on file type
    if (file.fieldname === "uploadPhotos") {
      destDir = "uploads/images";
    } else if (file.fieldname === "uploadVideo") {
      destDir = "uploads/videos";
    } else if (file.fieldname === "uploadFile") {
      destDir = "uploads/files";
    } else if (file.fieldname === "departmentImage") {
      destDir = "uploads/departmentImages";
    } else if (file.fieldname === "categoryImage") {
      destDir = "uploads/categoryImages";
    } else if (file.fieldname === "subCategoryImage") {
      destDir = "uploads/subCategoryImages";
    } else if (file.fieldname === "itemImage") {
      destDir = "uploads/itemImages";
    } else if (file.fieldname === "brandImage") {
      destDir = "uploads/brandImage";
    } else {
      destDir = "uploads";
    }

    // Create destination directory if it doesn't exist
    fs.mkdir(destDir, { recursive: true }, (err) => {
      if (err) {
        return cb(err);
      }
      cb(null, destDir);
    });
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const more_upload = multer({ storage: storage });
module.exports = more_upload;
