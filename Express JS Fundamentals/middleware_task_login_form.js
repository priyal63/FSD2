// Write an ExpressJS application that creates a login form containing fields
// for username and password along with a submit button. 
// The form data should be sent to the server using the POST method. 
// Implement an authentication middleware that checks whether the entered 
// username is "admin" and the password is "1234". If the credentials are correct,
//  the application should display the message "Login Successful". Otherwise, 
// it should display "Invalid Credentials".

var express=require("express");
var app=express();

app.use(express.urlencoded({extended:true}));

var check= (req, res, next) => {
  req.uname="admin";
  req.pass="1234";
  next();
};

app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="post">
        <input type="text" name="un"/>
        <input type="password" name="pass"/>
        <button type="submit">submit</button>
        </form>`);
})

app.post("/data",check,(req,res)=>{
    if(req.body.un == req.uname && req.body.pass == req.pass){
        res.write(`<h1> Login Successful </h1>`);
    }
    else{
        res.write(`<h1> Invalid Credentials </h1>`);
    }
    res.send();
})
app.listen(5001);