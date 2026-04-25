var express = require("express");
var app = express();

var cp = require("cookie-parser");
app.use(cp());

app.use(express.urlencoded());

app.use(express.static(__dirname, { index: "cookies_form.html" }));
app.post("/next", (req, res) => {
  res.cookie("fname", req.body.fname);
  res.cookie("lname", req.body.lname);
  res.cookie("pass", req.body.pass);
  res.redirect("/admin");
});

app.get("/admin", (req, res) => {
  res.clearCookie("lname");
  res.send(`<h1>Welcome ${req.cookies.fname} ${req.cookies.lname}</h1><br><h1>Your Password is ${req.cookies.pass}</h1>`);
});

app.listen(3000);

// output---

// Welcome priyal undefined
// Your Password is pry
