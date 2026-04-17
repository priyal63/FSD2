var express=require("express");
var app=express();


app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="get">
        <input type="email" name="em"/>
        <input type="password" name="pa"/>
        <button type="submit">submit</button>
        </form>`);
})

app.get("/data",(req,res)=>{
    const b=req.query.em;
    const n=req.query.pa;
    res.send(`<h1>Email id is :${b}</h1><br>
        <h1>Password is :${n}</h1>`)
})

// Email id is pry@gmail.com

// Password is pry3

app.listen(5001)