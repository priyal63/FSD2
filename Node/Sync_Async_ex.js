//Sync and Async example

var fs = require("fs");
fs.writeFileSync("Sync_ex.txt", "Hello! How are you");

console.log("Sync operation done");
fs.writeFile("Async_ex.txt", "Hi", function (e) {
  if (e) {
    console.log(e);
  } else {
    console.log("Async task comleted");
  }
});
console.log("Last line");
