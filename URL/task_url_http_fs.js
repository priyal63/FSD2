// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be fetched from the url given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
// 2) Read content from file “1.png” display a image 
// 3) Write a Node.js program using the HTTP module to create a server that sends a JSON response when the user visits the /api route.The JSON object should contain:name as "Rahul", course as "NodeJS",status as "Enrolled"Set the appropriate header for JSON data.
// 4) If any other page is requested it shows “Page not found” message in plain text.



var http = require("http")
var fs = require("fs")
var url = require("url")

var addr = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest";
var pa = url.parse(addr, true)
console.log(pa)

var content = `\n ${pa.query.c1}! \n ${pa.query.c3}! \n ${pa.query.c2}! \n ${pa.hash} `;

fs.writeFileSync("." + pa.pathname, content)

http.createServer((req, res) => {
    if (req.url === "/home") {
        var r = fs.readFileSync("." + pa.pathname, "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1 style="color:red;"><pre>${r}</pre><h1>`)
    }
    else if (req.url === "/about") {
        var i = fs.readFileSync("1.png");
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(i);
    }
    else if(req.url==='/api'){
        var d={"name":"Rahul","Course":"Node JS","Enrolled":"yes"};
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(d));
    }
    else{
        res.writeHead(404,{"conetnt-type":"text/plain"})
        res.write(" Page not found ")
        res.end()
    }
}).listen(5054)

