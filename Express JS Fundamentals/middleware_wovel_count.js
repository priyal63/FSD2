// Write an ExpressJS to take a UserName, Password, Textarea for “message” & submit 
// button using get method.
// 1) After clicking submit button the content of submitted details should be represented on “/login” page along with one “show vowel” link.
// 2) By clicking “show vowel” link count of vowel used in submitted “message” will display on “/message” page. (Use next() to route page)


var express=require("express");
var app=express();


app.get("/",(req,res)=>{
    res.send(`<form action='/login' method='get'>
        <input type='text' name='un' /><br>
        <input type='password' name='pass' />
        <textarea name='area'></textarea>
        <button type='submit'>Submit</button>
        </form>`) 
})

app.get("/login",(req,res)=>{
    res.type("text/html")
     res.write(`<h2> ${req.query.un} </h2>
        <h2> ${req.query.pass} </h2>
        <h2> ${req.query.msg} </h2>
        <a href="#" name='link' >Show Vovel</a>`)
    res.send();

})
app.listen(5001);