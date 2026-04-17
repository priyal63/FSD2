// Calculator

var express = require("express");
var app = express();
app.use(express.urlencoded()); 

app.get("/",(req,res)=>{
    res.send(`<form action='/data' method='post'>
        <input type='number' name='n1' />
        <input type='number' name='n2' />
        <input type='radio' name='add'>Add</button>
        <input type='radio' name='sub'>Sub</button>
        <button type='submit'>Submit</button>
        </form>`) 
})

app.post("/data",(req,res)=>{
    const b=req.body;
    console.log(b);
    const n1=parseInt(req.body.n1);
    const n2=parseInt(req.body.n2);
    console.log(req.body.add)
    if (req.body.add){
        res.send(`<h1>Addition  ${n1+n2}</h1>`)
    }
    else{
        res.send(`<h1>Substraction  ${n1-n2}</h1>`)
    }
})

app.listen(5000);
