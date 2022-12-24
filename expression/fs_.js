var fs = require('fs');
// var readfile = fs.createReadStream('./notes.txt');
// console.log(readfile);

fs.readFile('notes.txt',(err,data)=>{
    console.log("red file",err);
})

// var st = fs.readFileSync('notes.txt');