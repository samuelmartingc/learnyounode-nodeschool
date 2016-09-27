var fs = require('fs')
var path = require('path')
module.exports = function (path, ext, callback) {
  fs.readdir(path, function (err, files) {
    if (err) return callback(err)
    var result = []
    files.forEach(function(file) {
      if (file.split('.')[1] === ext)
        result.push(file)
    })
    callback(null, result)
  })
}



//official

// var fs = require('fs')
// var path = require('path')
//
// module.exports = function (dir, filterStr, callback) {
//
//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)
//
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//
//     callback(null, list)
//   })
// }
