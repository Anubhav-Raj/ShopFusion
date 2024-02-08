const multer = require("multer");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Choose destination directory based on file type
    console.log(file.fieldname);
    if (file.fieldname === "images") {
      cb(null, "uploads/images");
    } else if (file.fieldname === "video") {
      cb(null, "uploads/videos");
    } else if (file.fieldname === "file") {
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
