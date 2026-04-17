var express=require("express");
var app=express();

// Syntex
// app.get(Path,callback function)
// app.post(Path,callback function)
// app.put(Path,callback function)
// app.delete(Path,callback function)

// app.listen(5001,Domain name,backlog,callback function)
// app.listen(5001,localhost,100,()=>{c.l()})


app.get("/",(req,res)=>{
    res.set("Content-Type","text/html");
    // res.setHeader("Content-Type","text/html");
    // res.type("text/html");
    res.write("<h3> Hello B2 Student!</h3>");
    res.send();

}) //Hello B2 Student!

app.get("/about",(req,res)=>{
    res.write("<h2>Hello</h2>");
    res.send();
}) //<h2>Hello</h2>

app.get("/about1",(req,res)=>{
    res.send("<h3> Hello </h3>")
}) //Hello

app.listen(5001,()=>console.log("server started"));
// app.get("/about",(req,res)=>{
//     res.write("<h2>Hello</h2>");
//     res.send("<h3>About page</h3>");
// }) 
// error
// if you put any data in res.send() then you can not do res.write() any thing



