const express = require("express");
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//intialize models
const db = require("./app/models");

//route for testing
app.get("/", (req, res) => {
  res.json({ message: "This is a training API Services." });
});

//add more routes
require("./app/routes/students.routes")(app);

// start server and port listening
app.listen(8080, () => {
  console.log("App Server is running");
});
