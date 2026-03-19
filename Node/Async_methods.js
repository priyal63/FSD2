 var fs = require("fs");
// fs.mkdir("afs", (e) => {
//   if (e) throw e;
//   console.log("Folder created");
// });

// fs.writeFile("afs/my.txt", "Asyncronous Task", (e) => {
//   if (e) throw e;
//   console.log("Written");
// });

// fs.appendFile("afs/my.txt", "Hi", (e) => {
//   if (e) throw e;
//   console.log("Append");
// });

// fs.readFile("afs/my.txt", "utf-8", (e, data) => {
//   if (e) throw e;
//   console.log(data);
// });

// fs.rename("afs/my.txt", "afs/new.txt", (e) => {
//   if (e) throw e;
//   console.log("renamed");
// });

// fs.unlink("afs/my.tst", (e) => {
//   if (e) console.log("No such file found" + e);
//   console.log("deleted");
// });

// fs.copyFile("afs/new.txt", "mynew.txt", (e) => {
//   if (e) throw e;
//   console.log("content copied");
// });

fs.rmdir("afs",(e) => {
  if (e) throw e;
  console.log("folder deleted");
})