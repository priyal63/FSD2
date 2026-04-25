//Write an ExpressJS REST API script to create an array of JSON objects named employee_data having properties:
//  Emp_id Name Department Salary Experience When the user requests: /employees → It should display all employees data.
//  /employees/:id → It should display data of the employee whose Emp_id matches the given id.
//  Example: /employees/3 → Display data of employee with Emp_id 3.

var express = require("express");
var router = express.Router();

var obj = [{"name":"Heer","Emp_id":"10"},
    {"name":"Krisha","Emp_id":"20"},
    {"name":"aashka","Emp_id":"30"}]

router.get("/", (req, res) => {
    res.type("text/html");
    for (let o of obj) {
        res.write(`<h1> Name: ${o.name} <br>
           ID : ${o.Emp_id}
            </h1>`);
    }
    res.send();
});

router.get("/:id", (req, res) => {
    var data = obj.filter((o) => o.Emp_id == req.params.Emp_id); 
    if (data.length > 0) { 
        for (let item of data) { 
            res.write(`<h1> Student of ID ${req.params.Emp_id}: ${item.name} <br>
            </h1>`);
        }
        res.send();
    } else {
        res.send("No such Employee available");
    }
});

module.exports = router;