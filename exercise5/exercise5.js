
var fs = require('fs')
var path = process.argv[2]
var ext = process.argv[3]

fs.readdir(path, function (err, list) {
  // var lines = contents.toString().split('\n')
  for (var i=0;i<list.length;i++){
    if (list[i].split('.')[1] === ext)
      console.log(list[i])
  }
})


//official solution

// var fs = require('fs')  
// var path = require('path')
//
// var folder = process.argv[2]
// var ext = '.' + process.argv[3]
//
// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function(file) {
//       if (path.extname(file) === ext) {
//           console.log(file)
//       }
//   })
// })
