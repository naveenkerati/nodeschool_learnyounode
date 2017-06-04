var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var numberOfLines = buf.toString().split('\n').length;

console.log(numberOfLines-1);
