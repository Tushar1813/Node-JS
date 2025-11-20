var express= require('express')
var obj=new express()

var log=(req,res,next)=>{
    console.log("first security check passed")
    next()
}
obj.use(log)

obj.use((req,res,next)=>{
    console.log("Second security check passed")
    next()
})
obj.get('/',(req,res)=>{
    res.sendFile(__dirname+'/dashboard.html')
})


obj.get('/First',(req,res)=>{
    res.sendFile(__dirname+'/dashboard.html')
})


obj.listen(3000,()=>{
    console.log("Server Running")
})