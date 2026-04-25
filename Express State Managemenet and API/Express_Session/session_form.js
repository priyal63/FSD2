// write a script to meet following requirements:
// •	Create index.html file page which contains form(username,password,login button). and open it on localhost.
// •	After clicking submit button, it should jump on “savesession” page. Store username and password in session.
// •	After saving session, redirect to “fetchsession” page and read value. Put a LOGOUT link here.
// •	Jump on delete session page after clicking LOGOUT link.
// •	Destroy the session on this page and redirect to index.html page.


var express = require("express");
var session = require("express-session");
var app = express();
const path = require('path');

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'session_form.html'));
});


app.post("/savesession", (req, res) => {
    req.session.un = req.body.un;
    req.session.pass = req.body.pass;
    res.redirect("/fetchsession");
});

app.get("/fetchsession", (req, res) => {
    if (req.session.un) {
        res.send(`Welcome ${req.session.un}! <br><a href="/deletesession">Log out</a>`);
    } else {
        res.redirect("/");
    }
});

app.get("/deletesession", (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/");
    });
});


app.use(express.static(__dirname, { index: 'session_form.html' }));

app.listen(5001, () => console.log("Server running on http://localhost:5001"));
