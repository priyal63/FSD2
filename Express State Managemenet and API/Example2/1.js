var express=require("express");
var app=express();

app.use(express.static("frontend",{index:"2.html"}));
app.listen(5001);

//cd Example2
//node 2.js