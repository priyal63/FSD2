var express=require("express");
var app=express();

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="post">
        <input type="text" name="un"/>
        <button type="submit">submit</button>
        </form>`);
})

app.post("/data",(req,res)=>{
    const b=req.body;
    console.log(b);
    const n=req.body.un;
    res.send(`<h1>Wellcome ${n}</h1>`)
})

app.listen(5001)