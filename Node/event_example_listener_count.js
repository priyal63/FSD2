var eventemitter=require("events");
var ee=new eventemitter();

var fun1=(m)=>{
    console.log(`fun1 msg: ${m}`)
}

var fun2=(m)=>{
    console.log(`fun2 msg: ${m}`)
}

ee.on("e1",fun1)
ee.on("e1",fun2)
ee.on("e2",fun1)
ee.on("e2",fun2)
var c1=ee.listenerCount("e1")
console.log(c1) //2
var c2=ee.listenerCount("e2")
console.log(c2) //2
ee.emit("e1","Hello Students! ")
ee.emit("e2","Event Module ")
//output:

// fun1 msg: Hello Students! 
// fun2 msg: Hello Students!
// fun1 msg: Event Module
// fun2 msg: Event Module


ee.removeListener("e2",fun1)  // removes only given one listener
var c1=ee.listenerCount("e1")
console.log(c1) //2
var c2=ee.listenerCount("e2")
console.log(c2) //1


ee.removeAllListeners("e1") // removes all listeners
var c1=ee.listenerCount("e1")
console.log(c1) //0
var c2=ee.listenerCount("e2")
console.log(c2) //1

