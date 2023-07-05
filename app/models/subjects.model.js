

const { INTEGER } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Subjects = sequelize.define("subjects", {
    subject_name: { type: Sequelize.STRING },
    subject_teacher : { type: Sequelize.STRING(100) },
  });
  return Subjects;
};