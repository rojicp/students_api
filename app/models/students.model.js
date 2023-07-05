

const { INTEGER } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Students = sequelize.define("students", {
    student_name: { type: Sequelize.STRING },
    student_age: { type: Sequelize.INTEGER },
  });
  return Students;
};