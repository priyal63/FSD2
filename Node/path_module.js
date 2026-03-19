// Path Module
var p=require("path");
var path="D:/Node/afs/new.txt";
var d=p.dirname(path);
var b=p.basename(path);
var e=p.extname(path);
var p1=p.parse(path)
console.log(`Directory: ${d} \n file : ${b} \n Extention : ${e}`);
console.log(p1);  