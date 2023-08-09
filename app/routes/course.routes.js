

const controller = require("../controllers/course.controller")

module.exports = function (app) {
  
  // C R U D functions

  app.post("/course/create", controller.createRecord);

  app.post("/course/update", controller.updateRecord);

  app.post("/course/getlist", controller.getList);

  app.post("/course/delete", controller.deleteRecord);

};
