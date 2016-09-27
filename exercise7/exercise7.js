
var mymodule = require('./mymodule')
var url = process.argv[2]

function callback(err, data){
  var result = data.toString().split('\n')

  result.forEach(function (res) {
         console.log(res)
       })
}
mymodule(url,callback)


//official

// var http = require('http')
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)
//
