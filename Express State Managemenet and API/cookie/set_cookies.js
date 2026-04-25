// npm i cookie-parser
var express = require("express");
var app = express();
var cp = require("cookie-parser")
app.use(cp());
app.get("/", (req, res) => {
    res.cookie("fname","ABC");
    res.cookie("lname","XYZ");
    res.cookie("subject","FSD-2", {maxAge:5000});
    res.send(req.cookies);
})
app.listen(5008, () => {
    console.log('Server running on http://localhost:5008');
});// npm i cookie-parser
var express = require("express");
var app = express();
var cp = require("cookie-parser")
app.use(cp());
app.get("/", (req, res) => {
    res.cookie("fname","ABC");
    res.cookie("lname","XYZ");
    res.cookie("subject","FSD-2", {maxAge:5000});
    res.cookie("email","abc@gmail.com",{expires:new Date(Date.now()+10000)});
    res.clearCookie("fname");
    res.send(req.cookies);
})

app.listen(5008, () => {
    console.log('Server running on http://localhost:5008');
});
