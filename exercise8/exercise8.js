var bl = require('bl')
var http = require('http')
var url = process.argv[2]

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    console.log(data.toString().length)
    console.log(data.toString())
  }))
})
