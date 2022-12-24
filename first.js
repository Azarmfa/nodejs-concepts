var math = require("./expression/math");
var process = require('process');

const parg = process.argv;
console.log('process argv',process.argv);
// return;

if(parg.length>2){
    let parglist = parg.slice(2);
    console.log(parglist);
    var j=parglist[0];
    var i=parglist[1];
    console.log('add',math.add(i,j));
    console.log('subtract',math.subtract(i,j));
}

var arr = [1,2,3,4,5];
arr.slice(1)