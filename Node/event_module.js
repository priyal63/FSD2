// event module 
// syntex

// ee.emit(event,arge1,arge2)
// ee.on(event,(p1,p2)=>{})
// ee.addListener(",")
// ee.removeListener(event)
// ee.removeAllListener(event)

var eventemitter=require("events");
var ee=new eventemitter();

ee.on("start",()=>{
    console.log("First exe")
})   // this is like method

ee.emit("start")  //this is call the "start" method
//First exe


//------------------------------------------------------

ee.on("add",(a,b)=>{
    console.log(`Addition is ${a+b}`);
})

ee.on("add",()=>{
    console.log("Done");
    ee.emit("Success")
})

ee.on("Success",()=>{
    console.log("Task completed")
})


ee.emit("add",5,10) 
// Addition is 15
// Done
// Task completed

 ee.emit("add")
// Addition is NaN
// Done
// Task completed


