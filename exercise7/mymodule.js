var http = require('http')


module.exports = function (url, callback) {
  http.get(url, function (response) {
    response.on("data", function (data) {
      callback(null, data)
    })
  })
}
