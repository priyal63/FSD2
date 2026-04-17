var express = require("express");
var app = express();

var first = (req, res, next) => {
  console.log("First Middleware");
  next();
};
var second = (req, res, next) => {
  req.name = "Dharti";
  console.log("Second Middleware");
  next();
};
var third = (req, res, next) => {
  req.marks = 25;
  console.log("Third Middleware");
  next();
};

app.use("/test", first, third);
app.get("/test", (req, res) => {
  res.send("My Page");
});
// http://localhost:5001/test
// in consol
// First Middleware
// Third Middleware

app.get("/all", first, second, third, (req, res) => {
  res.send(`<h1>Hello ${req.name}</h1>
     <h2>Your Marks is : ${req.marks}</h2>`);
});
// http://localhost:5001/all
// in console
// First Middleware
// Second Middleware
// Third Middleware

app.listen(5001);
