const db = require("../models");
const Course = db.course;

exports.createRecord = (req, res) => {
  if (!req.body.course_name) {
    res.send({
      message: "Mandatory fields are not provided...",
    });
  } else {
    Course.create({
      course_name: req.body.course_name,
      course_details: req.body.course_details,
    })
      .then((course_record) => {
        res.send({
          message: "Record created successfully",
          id: course_record.id,
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
  if (!req.body.id || !req.body.course_name) {
    res.send({
      message: "Mandatory fields are not provided...",
    });
  } else {
    Course.findOne({
      where: { id: req.body.id },
    }).then(async (course_record) => {
      if (course_record) {
        course_record.course_name = req.body.course_name;
        course_record.course_details = req.body.course_details;
        await course_record
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
    Course.findAll({
      attributes: ["id", "course_name", "course_details"],
      order: [["id", "ASC"]],
    }).then((records) => {
      res.status(200).send({
        message: "Success",
        listData: records,
      });
    });
  }
};

exports.deleteRecord = async (req, res) => {
  if (!req.body.id) {
    res.send({
      message: "Mandatory fields are not provided...",
    });
  } else {
    Course.findOne({
      where: { id: req.body.id },
    }).then(async (course_record) => {
      if (course_record) {
        await course_record.destroy();
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
