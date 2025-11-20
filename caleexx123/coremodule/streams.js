var fs=require('fs')
// var data=""
// var reader=fs.createReadStream('example.txt')
// reader.setEncoding('utf-8')
// reader.on('data',(chunk)=>{
//     data=data+chunk
// })

// reader.on('end',()=>{
//     console.log("Content of the File: ",data)
//     console.log("Reading Finished")
// })

// reader.on('error',()=>{
//     console.log("Error in Opening the file")
// })


// content="dsttg hsuhsuh hdhhn"
// var writer=fs.createWriteStream("example2.txt")
// writer.write(content,()=>{
//     console.log("writing  the content, hence file created kindly check")
// })
// writer.end()  //end will just stop using writer
// writer.on('finish',()=>{
//     console.log("writing finished")
// })                                      // Finish is a listnet which will simply clear the memory also 

// writer.on('error',()=>{
//     console.log("error")
// }) 

// var data=""
// var reader=fs.createReadStream('example2.txt')
// reader.setEncoding('utf-8')
// reader.on('data',(chunk)=>{
//     data=data+chunk
// })

// reader.on('end',()=>{
//     console.log("Content of the File: ",data)
//     console.log("Reading Finished")
// })

// reader.on('error',()=>{
//     console.log("Error in Opening the file")
// })

var reader=fs.createReadStream('example.txt')
var writer=fs.createWriteStream('examplepipe.txt')
writer.on('pipe',()=>{
    console.log("working on pipe")
}) 
reader.pipe(writer)  //for transfering data from one file to another

reader.unpipe(writer)   //for creating a new file but will not transfer the data to that one as the new file will be empty