const express = require("express");
const cors = require("cors");
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  next();
});
//intialize models
const db = require("./app/models");

//route for testing
app.get("/", (req, res) => {
  res.json({ message: "This is a training API Services." });
});

//add more routes
require("./app/routes/students.routes")(app);
require("./app/routes/course.routes")(app);
require("./app/routes/generic.routes")(app);

// start server and port listening
app.listen(8080, () => {
  console.log("App Server is running");
});
