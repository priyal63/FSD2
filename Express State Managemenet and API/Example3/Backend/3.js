var express = require("express");
var app = express();

var path=require("path");
var sp=path.join(__dirname,"../Frontend")

app.use(express.static(sp,{index:"3.html"}));
app.listen(5000);


// or
// app.get("/",(req,res)=>{
//     res.sendFile(sp+"/1.html");
// })
 
//cd Example3
//cd backend
//node 3.js