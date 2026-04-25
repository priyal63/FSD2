var express=require("express");
var app=express();

var cp = require("cookie-parser")
app.use(cp());
app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"cookies_feedback_form.html"}));
app.post("/submit",(req,res)=>{
    const {name,email,msg,feedback}=req.body;
    const fb={name,email,msg,feedback};
    res.cookie("feedback",fb,{maxAge:10000});
    res.send(`<h1>Thank you!</h1>
        <a href='/details'>View feedback</a>`)
})

app.get("/details",(req,res)=>{
    var feedback1=req.cookies.feedback;
    if(feedback1){
        res.send(`<h1> Thank you !
             ${feedback1.name}!</h1>
            <h2> Your :${feedback1.msg}</h2>
            <h3> Rating : ${feedback1.feedback}</h3>
            <a href="/">Logout</a>`)
    }
    else{
        res.send(`No feedback <a href="/">Logout<a>`)
    }
})


app.listen(5000, () => console.log('Server running at http://localhost:5000'));

// Output--------------

// Thank you ! Dada!
// Your :Khadus
// Rating : Bad