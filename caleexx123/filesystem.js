var fs = require('fs')

// fs.readFile("test.json",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(JSON.parse(data)) //string to object
//     }
// })


// var content = "Hi This is node js"

// //sync writing
// fs.writeFileSync("test.txt",content)
// console.log("file has been written, check your editor")

// //To write something in Json file
// //for Asynchronous
// var contentjson={name:"Tushar"}
// var parsed =JSON.stringify(contentjson)

// fs.writeFile("testasyn.json",parsed,(err)=>{
//     if(err){
//         console.log(err)
//     }
// })


//File copying from one file to another

//Synchronous
// fs.copyFileSync("test.txt","testcopy.txt")

//asysnchronous

// fs.copyFile("test.json","testcopy.json",(err)=>{
//     if(err){console.log(err)}
// })

///Deleting the files
//UnlinkSync
//unlink
//syn
// fs.unlinkSync("testcopy.txt")
// // asyn
// fs.unlink("testcopy.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

//Creating Server

var http= require("http")
// http.createServer((req,res)=>{
//     fs.readFile("test.txt","utf-8",(err,data)=>{
//         if(err){res.end(err)}
//         else{res.writeHead(200,{"content-type":"text/plain"}) 
//         res.end(data)}
//     })
// }).listen(3003,()=>{
//     console.log("Open Browser")
// })

//To create diff pages or task
http.createServer((req,res)=>{

    if(req.url=='/fread'){
        var data=fs.readFileSync('test.txt','utf-8')
        res.end(data)
    }
    else if(req.url=='/frename'){
        fs.renameSync('testcopy1.txt','testcopy2.txt')
        res.end("file rename, check ur editor")
    }
    else{
        
    res.end(`<h1>Hello World</h12>
        <a href="/fread">File Read</a>
        <a href="/frename">File Rename</a>
        `)
    }
}).listen(3001,()=>{
     console.log("Open Browser")
 })  
 //Something wrong
 