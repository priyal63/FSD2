// upload multiple file in myImage folder

var express = require("express");
var app = express();

var mult = require("multer");
app.use(
  express.static(__dirname, { index: "multer_upload_multiple_files.html" }),
);

var store = mult.diskStorage({
  destination: "myImage",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg"); // customize your file name fieldname=name in input tage of html file
    console.log(file);
  },
});

var upload = mult({ storage: store, limits: { fileSize: 10 * 1024 * 1024 } });
app.post("/uploadfile", upload.array("test", 5), (req, res) => {
  const files = req.files;
  console.log(files);
  if (files) {
    res.type("text/html");
    for (f of files) {
      res.write(`<h1> File ${f.originalname} has been 
            uploaded in folder <span style='color:red'> ${f.destination}</span></h1>`);
    }
    res.send();
  }
});
app.listen(5000);
