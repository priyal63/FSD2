var http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    var d={"sub":"FSD-2","faculty":"NAS"}
    res.end(JSON.stringify(d));
}).listen(5002)

// output on localhost:5002