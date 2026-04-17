var express=require("express");
var app=express();


obj=[{"name":"x","age":30},
    {"name":"y","age":15},
    {"name":"z","age":45},
]

app.get("/api",(req,res)=>{
    res.send(obj)
})
//[{"name":"x","age":30},{"name":"y","age":15},{"name":"z","age":45}


app.get("/api1",(req,res)=>{
    res.json(obj)
})
//[{"name":"x","age":30},{"name":"y","age":15},{"name":"z","age":45}]


app.get("/api2",(req,res)=>{
    //res.write(obj)     error
    res.write(JSON.stringify(obj));
    res.send();
})

app.get("/sort",(req,res)=>{
    o=obj.sort((a,b)=>b.age-a.age)
    res.write(`<table border>
        <tr>
            <td>name</td>
            <td>age</td>
        </tr>
        <tr>
            <td>${(o[0].name)}</td>
            <td>${(o[0].age)}</td>
        </tr>
        <tr>
            <td>${(o[1].name)}</td>
            <td>${(o[1].age)}</td>
        </tr>
        <tr>
            <td>${(o[2].name)}</td>
            <td>${(o[2].age)}</td>
        </tr>
    </table>`)
})

// name	age
// z	45
// x	30
// y	15


app.listen(5001)