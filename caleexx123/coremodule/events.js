var eventemitter = require('events')
var obj= new eventemitter()

obj.addListener("marketOpen",(msg)=>{
    console.log(msg)
})
obj.emit("marketOpen","Please do your task")
obj.emit("marketOpen","Please do your task")

obj.on("weatherChange",(msg)=>{
    console.log(msg)
})
obj.emit("weatherChange","Weather has changed")
obj.emit("weatherChange","Weather has changed")

obj.once("circus",(msg)=>{
    console.log(msg)
})
obj.emit("circus","circus arrived")
obj.emit("circus","circus arrived")

console.log(obj.getMaxListeners())

for(let i=0; i<9; i++){
    obj.on("marketOpen",(msg)=>{
        console.log(msg)
    })
}
obj.emit("marketOpen","Opened")

function f1(){
    console.log("send the image")
}

function f2(){
    console.log("send doc file")
}
obj.on("chat",f1)
obj.on("chat",f2)
obj.emit("chat")

obj.removeListener("chat",f1)// this will remove the eventlistener for f1
obj.emit("chat")

obj.removeAllListeners("chat")// for all listeners as taking argument chat in common
obj.emit("chat")