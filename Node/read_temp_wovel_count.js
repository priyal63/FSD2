

// Write a Node.js program using fs synchronous methods to read a file, count the number of vowels in its content, and append the vowel count to the same file.
var fs=require("fs")
fs.writeFileSync("read_temp_wovel_count.txt","Hi! How are you ? \n Welcome to lj university!")
var r=fs.readFileSync("read_temp_wovel_count.txt","utf-8")

var i=0;
var v="aeiouAEIOU"

for (let a=0;a<r.length;a++){
    if(v.includes(r[a])){
        i++;
    }
}

fs.appendFileSync("read_temp_wovel_count.txt","\n Number of Wovels ="+i)
console.log("task complete")