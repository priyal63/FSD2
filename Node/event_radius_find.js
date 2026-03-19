var eventemitter=require("events");
var ee=new eventemitter();

ee.on("circle",(r,s)=>{
    if(r<0){
        console.log("Radius is nagetive")
    }
    else{
        var pc=2*3.14*r;
        console.log(`Perimeter of circle is ${pc}`)
    }

    if(s<0){
        console.log("Side is nagetive")
    }
    else{
        var pr=2*(s+r)
        console.log(`Peremeter of rectangle is ${pr}`)
    }
}
)
ee.emit("circle",3,2)
//Perimeter of circle is 18.84
//Peremeter of rectangle is 10

ee.emit("circle",-3,2)
// Radius is nagetive
// Peremeter of rectangle is -2

ee.emit("circle",3,-2)
// Perimeter of circle is 18.84
// Side is nagetive

ee.emit("circle",-3,-2)
// Radius is nagetive
// Side is nagetive