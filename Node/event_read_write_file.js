// create folder and file then write and read file by syncronunce method by event methods

var eventemitter=require("events")
var ee=new eventemitter();
var fs=require("fs")
ee.on("createfolder",()=>{
    if(!fs.existsSync("abc")){
        fs.mkdirSync("abc")
    }
    else{
        console.log("Already Exists")
    }
    ee.emit("write")
})
ee.on("write",()=>{
    fs.writeFileSync("xyz.txt","Hello");
    console.log("Written")
    ee.emit("append");
    fs.appendFileSync("xyz.txt","Hello Mem")
})
ee.emit("createfolder")

// Already Exists
// Written