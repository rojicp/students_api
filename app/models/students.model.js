const { INTEGER } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Students = sequelize.define(
    "students",
    {
      student_name: { type: Sequelize.STRING },
      student_age: { type: Sequelize.INTEGER },
      address: { type: Sequelize.STRING(100) },
      gender: { type: Sequelize.STRING(50) },
      course_id: { type: Sequelize.STRING },
      course_name: { type: Sequelize.STRING },
    },
    {
      indexes: [
        { fields: ["student_name"], name: "UQ_student_name", unique: true },
      ],
    }
  );
  return Students;
};
