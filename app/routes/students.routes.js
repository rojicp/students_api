module.exports = function (app) {
  
  app.post("/student/list", (req, res) => {
    res.json({ message: "This is a Student List." });
  });

  app.post("/student/save", (req, res) => {
    res.json({ message: "This is a Student Save." });
  });

};
