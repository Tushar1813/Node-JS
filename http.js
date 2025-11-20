var a= require("http")
a.createServer((req,res)=>{
    res.write("hello\n")
    res.write("My name is Tush=====ar\n")
    res.write("I am an Engineer\n")
    var b=20
    res.write(b.toString()+"\n")
    res.write(`The number is ${b} \n`)
    function add(c,d){
        return c+d
    }
    function fact(c){
            if(c==1 || c==0){
                return 1
            }
            else{
                return c * fact(c-1)
            }
    }
    res.write(add(4,78).toString()+"\n")
    res.write(fact(8).toString()+"\n")                 // npm init -y to create json file
    res.end()
}).listen(3000,()=>{
    console.log("server running, open browser")
})