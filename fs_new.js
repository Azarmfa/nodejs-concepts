var fs = require('fs');

var data = "this is write data";
// //asynchronous -- non blocking
fs.readFile('./testfs/test.txt','utf8',(err,data)=>{
    if(err) console.log("Error",err);
    if(data) console.log(data);
});

// //synchronous - blocking
// var readfile = fs.readFileSync('test.txt','utf-8');

// console.log("sync -->",readfile);
// fs.writeFile('test.txt',data, ()=>{
//     console.log('write completed');
// });