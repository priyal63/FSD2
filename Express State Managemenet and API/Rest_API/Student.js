var express = require("express");
var router = express.Router();

var obj = [
    {"name": "A", "id": 1, "age": 20, "city": "Ahmedabad", "branch": "CSE"},
    {"name": "B", "id": 2, "age": 25, "city": "Surat", "branch": "CE"},
    {"name": "C", "id": 3, "age": 28, "city": "Rajkot", "branch": "IT"},
    {"name": "D", "id": 4, "age": 45, "city": "Bhavnagar", "branch": "AI&ML"},
    {"name": "E", "id": 5, "age": 78, "city": "Surendranager", "branch": "CST"},
    {"name": "F", "id": 6, "age": 56, "city": "Bharuch", "branch": "CS&IT"}
];

router.get("/", (req, res) => {
    res.type("text/html");
    for (let o of obj) {
        res.write(`<h1> Name: ${o.name} <br>
            ID: ${o.id} <br>
            Age: ${o.age} <br>
            City: ${o.city} <br>
            Branch: ${o.branch}
            </h1>`);
    }
    res.send();
});

router.get("/id/:id", (req, res) => {
    // FIX: Filter by id, not branch
    var data = obj.filter((o) => o.id == req.params.id); 

    if (data.length > 0) { 
        for (let item of data) { 
            res.write(`<h1> Student of ID ${req.params.id}: ${item.name} <br>
            Branch: ${item.branch} <br>
            Age: ${item.age} <br>
            City: ${item.city} <br>
            </h1>`);
        }
        res.send();
    } else {
        res.send("No such student available");
    }
});


router.get("/branch/:branch", (req, res) => {
    var data = obj.filter((o) => o.branch.toLowerCase() == req.params.branch.toLowerCase());
    
    if (data.length > 0) { 
        for (let item of data) {
            res.write(`<h1> Student of ${req.params.branch} Branch: ${item.name} <br>
            ID: ${item.id} <br>
            Age: ${item.age} <br>
            City: ${item.city} <br>
            </h1>`);
        }
        res.send();
    } else {
        res.send("No such branch available");
    }
});

module.exports = router;
