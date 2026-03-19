var fs = require("fs");
fs.writeFile("help.txt", "You are creating the file", (e) => {
  if (e) throw e;
  else {
    console.log("Written");
    fs.appendFile("task_Async.txt", "\nYou are appending the data.", (e) => {
      if (e) throw e;
      else {
        console.log("Appended");
        fs.readFile("task_Async.txt", "utf-8", (e, data) => {
          if (e) throw e;
          else {
            console.log(data);
            fs.copyFile("task_Async.txt", "test1.txt", (e) => {
              if (e) throw e;
              else {
                fs.unlink("task_Async.txt", (e) => {
                  if (e) throw e;
                  console.log("Thank you for using my program");
                });
              }
            });
          }
        });
      }
    });
  }
});

// Written
// Appended
// You are creating the file
// You are appending the data.
// You are appending the data.
// Thank you for using my program
