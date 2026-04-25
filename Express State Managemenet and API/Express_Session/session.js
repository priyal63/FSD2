// npm i express-session

var express=require("express");

var app=express();
var session=require("express-session");

// in exam write only this
// app.use(session({
//     secret:"LJ123"}));

app.use(session({
    secret:"LJ123",
    resave: false,
    saveUninitialized: false,
    cookie:{maxAge:10000}
    // name:"my" (for change name of cookie)
}));

app.get("/",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`<h1 style="color:red"> You ahve visited ${req.session.page_views}</h1>`);
    }
    else{
        req.session.page_views=1;
        res.send(`<h1> Wellcome to my website`);
    }
})

app.listen(5001);