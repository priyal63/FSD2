// npm install nodemailer

// for pass //--> gmail profile
// --> manage your google accout
// --> Security and sign in
// --> turn on two step varification
// --> search app password
// --> name:node
// --> generate pass
// --> copy the pass


var nm = require("nodemailer");
var trans = nm.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "your_gmail_id",
    pass: "password",
  },
});

var mailoption = {
  from: "your_gmail_id",
  to: "reciver_gmail.com",
  // to:"student1@gmail.com,student2@gmail.com"
  subject: "Nodemailer testing",
  text: "Simple Text sent",
  html: "<h1> Thank you for sending!</h1>",
  attachments: [
    {
      filename: "1.png",
      path: "./1.png",
    },
  ],
};

trans.sendMail(mailoption, (e, d) => {
    if(e){
        console.log(e);
    }
    else{
        console.log(d);
    }
});

