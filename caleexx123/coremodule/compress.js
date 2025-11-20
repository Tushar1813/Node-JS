//Transformable Stream - Compressing
// Q. Compress the file using all yhe three methods of zlib module

// var fs=require('fs')
// var zlib=require('zlib')

// var reader=fs.createReadStream('example.txt')
// var writer=fs.createWriteStream('examplepipe.txt.gz')

// var gzip=zlib.createBrotliCompress() //First method
// reader.pipe(gzip).pipe(writer)
// console.log("File Compressed")


// var fs=require('fs')
// var zlib=require('zlib')

// var reader=fs.createReadStream('example.txt')
// var writer=fs.createWriteStream('example1.txt.gz')

// var gzip=zlib.createDeflate() //Second method
// reader.pipe(gzip).pipe(writer)
// console.log("File Compressed")


var fs=require('fs')
var zlib=require('zlib')

var reader=fs.createReadStream('example.txt')
var writer=fs.createWriteStream('example3.txt.gz')

var gzip=zlib.createGzip() //Third method
reader.pipe(gzip).pipe(writer)
console.log("File Compressed")