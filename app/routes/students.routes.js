

const controller = require("../controllers/students.controller")

module.exports = function (app) {
  
  // C R U D functions

  app.post("/student/create", controller.createRecord);

  app.post("/student/update", controller.updateRecord);

  app.post("/student/getlist", controller.getList);

  app.post("/student/delete", controller.deleteRecord);

};
