var express=require("express");
var app=express();

// basic syntex of js
// app.get("/student/id/:id",(req,res)=>{})

// app.get("/student/branch/:branch",(req,res)=>{})

// app.get("/faculty/id/:id",(req,res)=>{})

// app.listen(7001);

// By Router module

var router=express.router();
router.get("/id/:id",(req,res)=>{})
router.get("/branch/:branch",(req,res)=>{})
module.exports=router
