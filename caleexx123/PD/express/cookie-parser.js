var express= require('express')
var obj=new express()
var cookieParser=require('cookie-parser')
obj.use(cookieParser())
obj.get('/set-cookie',(req,res)=>{
    res.cookie('theme','bright')
    res.send("Cookies have been set")
})

obj.get('/get-cookie',(req,res)=>{
    var theme1=req.cookies.theme
    res.send(`The fetched theme is ${theme1}`)
})

obj.get('/delete-cookie',(req,res)=>{
    res.clearCookie('theme')
    res.send("Cookies have been deleted")
})

obj.listen(3000, ()=>{console.log("Srever Running!!")})