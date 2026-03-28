var http = require("http");
var fs=require("fs")
http.createServer((req, res) => {
    if(req.url=="/"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<img src='img1.png'/>");
    }
    else if(req.url=="/img1.png"){
        var i=fs.readFileSync("img1.png");
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(i);
    }
    else{
        res.writeHead(404,{"conetnt-type":"text/html"})
        res.write("<h2> Page not found ,</h2>")
    }
}).listen(5003)

