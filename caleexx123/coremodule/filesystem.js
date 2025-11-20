var fs= require('fs')

//Synchronous Reading
console.log("file reading synchronously")
var data = fs.readFileSync('fread.txt', 'utf-8')
console.log(data)
console.log("sync reading done")

//Asynchronous Reading
console.log("file reading asynchronously")
fs.readFile('fread.txt','utf-8',(err, data)=>{
    if(err)console.log(err)
    else{console.log(data)}
} )//err take whatever is as input in fread to data variable

console.log("Async reading done")

// Different
// To read file asynchronously of test.json

