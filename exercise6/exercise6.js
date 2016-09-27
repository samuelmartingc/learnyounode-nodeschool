
var mymodule = require('./mymodule')
var path = process.argv[2]
var ext = process.argv[3]

function callback(err, data){
  data.forEach(function (data) {  
         console.log(data)
       })
}
mymodule(path,ext,callback)
