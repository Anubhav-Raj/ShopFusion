const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Choose destination directory based on file type

    if (file.fieldname === "uploadPhotos") {
      cb(null, "uploads/images");
    } else if (file.fieldname === "uploadVideo") {
      cb(null, "uploads/videos");
    } else if (file.fieldname === "uploadFile") {
      cb(null, "uploads/files");
    }
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const more_upload = multer({ storage: storage });
module.exports = more_upload;
