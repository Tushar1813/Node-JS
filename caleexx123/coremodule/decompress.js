// var fs=require('fs')
// var zlib=require('zlib')


// var reader=fs.createReadStream('example1.txt.gz')
// var writer=fs.createWriteStream('text1.txt')

// var unzip=zlib.createInflate() 
// reader.pipe(unzip).pipe(writer)    //Oppsite of deflate
// console.log("File Decompressed")


// var fs=require('fs')
// var zlib=require('zlib')


// var reader=fs.createReadStream('examplepipe.txt.gz')
// var writer=fs.createWriteStream('text2.txt')

// var unzip=zlib.createBrotliDecompress()   // Opposite of Brotlicompress
// reader.pipe(unzip).pipe(writer)
// console.log("File Decompressed")

var fs=require('fs')
var zlib=require('zlib')


var reader=fs.createReadStream('example3.txt.gz')
var writer=fs.createWriteStream('text3.txt')

var unzip=zlib.createGunzip()              // Opposite of gzip
reader.pipe(unzip).pipe(writer)
console.log("File Decompressed")