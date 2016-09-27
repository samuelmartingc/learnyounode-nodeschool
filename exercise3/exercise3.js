
var path = process.argv[2]
var fs = require('fs')
var buf = fs.readFileSync(path)
var string = buf.toString()
console.log(string.split('\n').length - 1);
