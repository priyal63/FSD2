var express = require("express");
var app = express();
var api = require("./Employee");

app.use("/Employee", api); 

app.listen(7001, () => console.log("Server running on http://localhost:7001/Student"));
