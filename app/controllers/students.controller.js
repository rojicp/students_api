const db = require("../models");
const Students = db.student;


exports.createRecord = (req, res) => {
  Students.create({
    student_name: "TEST1",
    student_age: 21,
  }).then((student_record) => {
    res.send({
      message: "Record created successfully",
      id: student_record.id
    });
  });
};
