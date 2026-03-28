var http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" }); // text/plain --> it an not consider html tags
    res.write("<h1>Welcome Students</h1>");
    res.end("<h2> end </h2>");
}).listen(5001, () => {
    console.log("Server Started at http://localhost:5001");
});


//after end you can write anything it gives a error after end 

//output in brouser on localhost:5001
//Welcome Students
//end