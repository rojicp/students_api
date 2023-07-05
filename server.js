
const express = require("express");
const app = express();

//route for testing
app.get("/", (req, res) => {
    res.json({ message: "This is a training API Services." });
  });

//intialize models
const db = require("./app/models");

//add routes
require("./app/routes/students.routes")(app);

// port listening
app.listen(8080,()=>{
  console.log("App Server is running");
});
