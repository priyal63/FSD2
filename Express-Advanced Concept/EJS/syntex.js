var express=require("express");
var app=express();

app.set("view engine","ejs");// it can fetch file from views folder
// app.set("views",Path.join(__dirname)) // it can fetch file from same folder

app.get("/",(req,res)=>{
    res.render("syntex");
})

app.listen(7000);

//Output :

// Hello
// <b>Priyal</b>

// Priyal

// <% This is EJS %>