const { INTEGER } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Students = sequelize.define(
    "students",
    {
      student_name: { type: Sequelize.STRING },
      student_age: { type: Sequelize.INTEGER },
      address: { type: Sequelize.STRING(100) },
    },
    {
      indexes: [
        { fields: ["student_name"], name: "UQ_student_name", unique: true },
      ],
    }
  );
  return Students;
};
