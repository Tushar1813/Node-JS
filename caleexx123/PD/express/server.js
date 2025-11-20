var expr=require('express')
var obj=new expr()
var encoded= expr.urlencoded({extended:true})    ///this is a line for only post to work
obj.get('/',(req,res)=>{
    res.send("Hey there my name is Tushar <br> I m In express")
})
obj.listen(3001,()=>{console.log("Server is Running")})

obj.get('/dashboard',(req,res)=>{
    res.send(`<h1>Heyy Buddy</h1>`)  ///either by this
    res.sendFile(__dirname+'/First.html')   // or by this
})

obj.get('/login',(req,res)=>{
    
    res.sendFile(__dirname+'/formget.html')  
})

obj.get('/getdetails',(req,res)=>{
    // res.send({
    //     username:req.query.n1,
    //     password:req.query.p1
    // })  ///either by this
    var num1= parseInt(req.query.num1)
    var num2= parseInt(req.query.num2)
    c=num1+num2
    res.send(`the sum is ${c}`)
    
})

obj.get('/loginpost',(req,res)=>{
    
    res.sendFile(__dirname+'/formpost.html')  
})

obj.post('/postdetails',encoded,(req,res)=>{
    res.send({
        username:req.body.n1,
        password:req.body.p1
    })  ///either by this
    // var num1= parseInt(req.query.num1)
    // var num2= parseInt(req.query.num2)
    // c=num1+num2
    // res.send(`the sum is ${c}`)
    
})