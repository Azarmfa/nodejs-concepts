var fs = require("fs");
var data = 'This is write stream';

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'UTF8');

writerStream.end();

writerStream.on('finish', function() {
   console.log("Write finished.");
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Ended");