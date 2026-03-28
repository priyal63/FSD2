var url=require("url");

var addr="https://video.google.com:8080/ljuniversity/about?branch=CSE$year=2025#students"
var up=url.parse(addr,true)

console.log(up)

//for remove warning in the output

process.noDeprecation=true;
// or
// node __no.deprecation url.js   --> this for terminal run like that for remove warning in the output
// node __trace.deprecation url.js

// output:
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'video.google.com:8080',  
//   port: '8080',
//   hostname: 'video.google.com',   
//   hash: '#students',
//   search: '?branch=CSE$year=2025',
//   query: 'branch=CSE$year=2025',
//   pathname: '/ljuniversity/about',
//   path: '/ljuniversity/about?branch=CSE$year=2025',
//   href: 'https://video.google.com:8080/ljuniversity/about?branch=CSE$year=2025#students'
// }


var a=up.query.year;
if(a%4==0){
    console.log("it is leap year")
}
else{
    console.log("it is not a leap year")
}

//it is not a leap year

