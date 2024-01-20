const path = require("path");
const multer = require("multer");

// Disk storage
const storage = multer.diskStorage({
  destination: "./uploads/images/",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// File filter function with size limit
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    if (file.size > 400 * 1024) {
      // Size limit in bytes
      return cb(new Error("Image size exceeds 400kb"), false);
    }
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Multer instance with size limit
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 400 * 1024 }, // Additional limit for clarity
});

module.exports = upload;
