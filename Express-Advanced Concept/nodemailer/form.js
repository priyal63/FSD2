var express = require("express");
var app = express();
app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"a.html"}));

var nm = require("nodemailer");

app.post("/sendemail",(req,res)=>{
    var n=req.body.n;
    var m=req.body.e;
    var trans = nm.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "krishavirani2007@gmail.com",
    pass: "moey pfpc jssd phct",
  },
});

    var mailoption = {
    from: "krishavirani2007@gmail.com",
    to: m,
    // to:"student1@gmail.com,student2@gmail.com"
    subject: "Nodemailer testing",
    text: "Simple Text sent",
    html: `<h1> Thank you for sending ${n} 👋🌺!</h1>`
  
};
trans.sendMail(mailoption, (e, d) => {
    if(e){
        console.log(e);
    }
    else{
        console.log(d);
    }
});
})


app.listen(5000);