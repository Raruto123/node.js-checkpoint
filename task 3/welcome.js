// non-blocking code
var fs = require("fs")

fs.readFile("welcome.txt", function(err, data) {

    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
});

console.log("programme fini")



// blocking code
// var fs = require("fs");
// // fs is the file system module we will see it later
// var data = fs.readFileSync('welcome.txt');

// console.log(data.toString());
// console.log("Program fini");