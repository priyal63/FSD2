var express = require("express");
var app = express();
var api = require("./Student");

app.use("/Student", api); 

app.listen(7001, () => console.log("Server running on http://localhost:7001/Student"));

// http://localhost:7001/student

// Name: A
// ID :001
// Age :20
// City :Ahmedabad
// Branch :CSE
// Name: B
// ID :002
// Age :25
// City :Surat
// Branch :CE
// Name: C
// ID :003
// Age :28
// City :Rajkot
// Branch :IT
// Name: D
// ID :004
// Age :45
// City :Bhavnagar
// Branch :AI&ML
// Name: E
// ID :005
// Age :78
// City :Surendranager
// Branch :CST
// Name: F
// ID :006
// Age :56
// City :Bharuch
// Branch :CS&IT

//http://localhost:7001/student/id/002

// Student of ID 002: B
// Branch: CE
// Age: 25
// City: Surat

//http://localhost:7001/Student/branch/CSE

// Student of CSE Branch: A
// ID: 1
// Age: 20
// City: Ahmedabad