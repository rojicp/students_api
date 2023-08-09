const { INTEGER } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define(
    "course",
    {
      course_name: { type: Sequelize.STRING },
      course_details: { type: Sequelize.STRING},
    },
    {
      indexes: [
        { fields: ["course_name"], name: "UQ_course_name", unique: true },
      ],
    }
  );
  return Course;
};
