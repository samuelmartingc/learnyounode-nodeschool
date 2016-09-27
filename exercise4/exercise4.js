
var path = process.argv[2]
var fs = require('fs')
function callback (err, data){
  if (err)
    return
  console.log(data.toString().split('\n').length - 1)
}
fs.readFile(path, callback)


// other option

// var fs = require('fs')
// var file = process.argv[2]
//
// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)  
// })
