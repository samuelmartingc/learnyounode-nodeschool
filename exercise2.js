//console.log(process.argv)
var result = 0;
for (var i=2;i<process.argv.length;i++){
  result = result + Number(process.argv[i])
}
console.log(result)
