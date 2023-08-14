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
      address: req.body.address,
      gender: req.body.gender,
      course_id: req.body.course_id,
      course_name: req.body.course_name,
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

exports.updateRecord = async (req, res) => {
  if (!req.body.id || !req.body.student_name || !req.body.student_age) {
    res.send({
      message: "Mandatory fields are not provided...",
    });
  } else {
    Students.findOne({
      where: { id: req.body.id },
    }).then(async (student_record) => {
      if (student_record) {
        student_record.student_name = req.body.student_name;
        student_record.student_age = req.body.student_age;
        (student_record.address = req.body.address),
          (student_record.gender = req.body.gender),
          (student_record.course_id = req.body.course_id),
          (student_record.course_name = req.body.course_name),
          await student_record
            .save()
            .then((result) => {
              res.send({
                message: "Record saved successfully",
              });
            })
            .catch((error) => {
              res.send({
                message: "Some error occured",
                error_details: error.message,
              });
              return;
            });
      } else {
        res.send({
          message: "Record not found...",
        });
      }
    });
  }
};

exports.getList = async (req, res) => {
  if (!req.body.user_id) {
    res.status(403).send({
      message: "Mandatory fields are not provided...",
    });
  } else {
    Students.findAll({
      attributes: [
        "id",
        "student_name",
        "student_age",
        "address",
        "gender",
        "course_name",
      ],
      order: [["id", "ASC"]],
    }).then((records) => {
      
      res.status(200).send({
        message: "Success",
        listData: records,
      });

      // setTimeout(function() {
      //   res.status(200).send({
      //     message: "Success",
      //     listData: records,
      //   });
      // }, 2000);
    });
  }
};

exports.deleteRecord = async (req, res) => {
  if (!req.body.id) {
    res.send({
      message: "Mandatory fields are not provided...",
    });
  } else {
    Students.findOne({
      where: { id: req.body.id },
    }).then(async (student_record) => {
      if (student_record) {
        await student_record.destroy();
        res.send({
          message: "Record deleted successfully...",
        });
      } else {
        res.send({
          message: "Record not found...",
        });
      }
    });
  }
};
