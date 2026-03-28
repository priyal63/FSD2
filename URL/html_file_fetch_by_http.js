var http=require("http")
var fs=require("fs")
var url=require("url")

var addr="http://localhost:5054/my.html";
var path=url.parse(addr,true)

http.createServer((req,res)=>{
    fs.readFile("."+path.pathname,(e,d)=>{
        if(e){
            res.end("No file")
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(d);
        }
    })
}).listen(5054)