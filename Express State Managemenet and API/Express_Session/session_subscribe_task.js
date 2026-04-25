// Write express js script to perform following tasks.
// 1.	Create one html file which contains one text field for name, email field and checkbox
//      for subscription. Html file will be loaded on home page. Email and name fields are 
//      required fields.
// 2.	On login page welcome user and email id data should be printed.
// a.	If user checked the subscription then “Thank you for the subscription” message will be
//      printed and “logout” link will be displayed under the message. If user clicks logout 
//      link then he/she will be redirected to the home page.
// b.	If user has not opted for the subscription then “You can subscribe to get daily updates”
//      message will be printed and “subscribe” link will be displayed under the message.
// c.	If user clicks subscribe link then he/she will be redirected to the subscription page.
//      In this page “Thank you for the subscription” message will be printed and “logout” 
//      link will be displayed under the message. If user clicks logout link then he/she will
//      be redirected to the home page.
//          Use concept of the middleware and you can use any of http methods(get/post).


const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'session_subscribe_task.html'));
});

const mw = (req, res, next) => {
   res.type("text/html");
   res.write(`<h2>Welcome ${req.body.un}!</h2>
    <h3>Email is ${req.body.eid}</h3>`);
   next();
};

app.post('/login',mw, (req, res) => {
    if(req.body.sub==="subscribe"){
        res.write(`Thank you <a href='/'>logout</a>`)
    }
    else{
        res.write(`you can subscribe <a href='/subscribe'>Subscribe</a>`)
    }
    res.send();
});

app.get('/subscribe', (req, res) => {
    res.send(`Thank you <a href='/'>logout</a>`)
});

app.listen(5000);