const multer = require("multer");
const path = require("path");

exports.fileUploadProcess = (req, res) => {

  res.status(200).send({
    message: "File uploaded successfully.",
  });
};
