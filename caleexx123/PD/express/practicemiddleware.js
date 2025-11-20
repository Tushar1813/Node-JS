var express= require('express')
var obj=new express()

var fake={                       ///application Level Middleware
    Id:23,
    name: "Tushar Thakur",
    role: "admin"
}

var auth=(req,res,next)=>{
    if(fake.role=="admin"){
        console.log("Authenticated Successfully!!")
        next()
    }
    else{
        console.log("Invalid User Kindlyy Check!!")
    }
//obj.use(auth)
}
obj.get('/',auth,(req,res)=>{
    res.sendFile(__dirname+'/dashboard.html')
})

obj.listen(3003,()=>{console.log("Server Is Running!!")})