var http = require('http')
var fs = require('fs')
var filename = process.argv[3];

var server = http.createServer(function(request, response) {
  response.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(filename).pipe(response);
});
server.listen(process.argv[2]);
