var express= require('express')
var obj=new express()


var path=require('path')

var filepath=path.join(__dirname,'public')


obj.use(express.static(filepath))

obj.use(express.urlencoded({extended:true}))
obj.use(express.json())

obj.post('/postdetails',(req,res)=>{
    var data=req.body
    res.send(data)
})
obj.listen(3000,()=>{
    console.log("Server Running")
}) 