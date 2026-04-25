var express=require("express");
var app=express();

app.use(express.static(__dirname));
app.listen(5001);

//cd Example1
//node 1.js