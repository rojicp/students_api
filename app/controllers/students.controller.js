const db = require("../models");
const Students = db.student;

exports.createRecord = (req, res) => {
  if (!req.body.student_name || !req.body.student_age) {
    res.send({
      message: "Mandatory fields are not provided...",
    });
  } else {
    Students.create({
      student_name: req.body.student_name,
      student_age: req.body.student_age,
    })
      .then((student_record) => {
        res.send({
          message: "Record created successfully",
          id: student_record.id,
        });
      })
      .catch((error) => {
        res.send({
          message: "Some error occured",
          error_details: error.message,
        });
      });
  }
};

