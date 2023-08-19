const multer = require("multer");
const path = require("path");

// Set up storage for uploaded files using Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

const controller = require("../controllers/generic.controller");

module.exports = function (app) {
  app.post("/file/upload", upload.single("file"), controller.fileUploadProcess);
};
