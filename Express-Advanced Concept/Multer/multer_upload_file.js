// upload file in my folder

var express=require("express");
var app=express();

var mult=require("multer");
app.use(express.static(__dirname,{index:"multer_upload_file.html"}));

var store=mult.diskStorage({
    destination:"My",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
        console.log(file);
    }
});

var upload=mult({storage:store});
app.post("/uploadfile",upload.single("mydoc"),(req,res)=>{
    var f=req.file;
    console.log(f);
    if(f){
        res.send(`<h1> File ${f.originalname} has been 
            uploaded in folder <span style='color:red'> ${f.destination}</span></h1>`);
    }
});

app.listen(5000)   