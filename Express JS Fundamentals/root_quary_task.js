var express = require("express");
var app = express();

// http://localhost:5001/user/101?age=5&name=priyal

app.get("/user/:user", (req, res) => {
  res.write(`<h1>Wellcome :${req.query.name}<br>
        Your user id is :${req.params.user}`);

    if (req.query.age>18){
        res.write(`<h1>You are adult</h1>`);
    }
    else{
        res.write(`<h1>You are not adult</h1>`);
    }
  res.send();
});


app.listen(5001);
