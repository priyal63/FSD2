var express = require("express");
var app = express();

// http://localhost:5001/product/101/cat/kids?age=5&gender=girl

app.get("/product/:pid/cat/:cat", (req, res) => {
  // res.write(req.params);  // {"pid":"101","cat":"kids"}
  res.write(`<h1>Product Id is :${req.params.pid}<br><br>
        Product Category is :${req.params.cat}`);
  res.send();
});
// Wellcome :priyal
// Your user id is :101
// You are adult
app.listen(5001);
