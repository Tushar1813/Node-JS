var express= require('express') ///Router Level Middleware
var obj=new express()

var router=express.Router()
var rou1=(req,res,next)=>{
    console.log("Will execute only for dashboard route")
    next()
}

var rou2=(req,res,next)=>{
    console.log("Will execute only for profile route")
    next()
}

router.get('/dashboard',rou1,(req,res)=>{
    res.send("Dashboard page will be opening")
})

router.get('/profile',rou2,(req,res)=>{
    res.send("Profile page will be opening")
})

obj.use('/',router)
//obj.use('/user',router)
//obj.use('/admin',router)

obj.listen(3004,()=>{console.log("Server Running!!")})