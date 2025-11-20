var eventemitter= require('events')
var obj= new eventemitter()
var fs= require('fs')

var eventcount={
    marketOpen:0,
    weatherChange:0,
    Circus:0,
    Chat:0
}

if(fs.existsSync('eventcount.json')){
    var data= fs.readFileSync('eventcount.json','utf-8')
    eventcount=JSON.parse(data)
}

function savecount(){
    fs.writeFileSync('eventcount.json',JSON.stringify(eventcount))}

obj.on("markstOpen",()=>{
    eventcount.marketOpen++
    savecount()
})
obj.emit("marketOpen")

obj.on("weatherChange",()=>{
    eventcount.weatherChange++
    savecount()
})
obj.emit("weatherChange")

obj.on("Circus",()=>{
    eventcount.Circus++
    savecount()
})
obj.emit("Circus")

obj.on("Chat",()=>{
    eventcount.Chat++
    savecount()
})
obj.emit("Chat")

console.log("summary",eventcount)