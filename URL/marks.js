var url=require("url");

var addr="https://www.example.com/test?t1=20&t2=25&t3=22&t4=21"
var up=url.parse(addr,true)

console.log(up)

// print all marks and total marks in the marks.txt file

var fs=require("fs")
var a=up.query.t1;
var b=up.query.t2;
var c=up.query.t3;
var d=up.query.t4;
console.log(a,b,c,d)
var total=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
fs.writeFileSync("marks.txt","marks of T1 "+a+"\nmarks of T2 "+b+"\nmarks of T3 "+c+"\nmarks of T4 "+d+"\nTotal marks "+total)