var exp = require("express")
var obj = exp()
var encoded = exp.urlencoded({ extended: true })
var fs = require("fs")

// Serve HTML file
obj.get('/', (req, res) => {
    res.sendFile(__dirname + '/dashboard.html')
})
  
obj.get('/fact', encoded, (req, res) => {
    res.sendFile(__dirname + 'fact.html')
})

obj.get('/rename', encoded, (req, res) => {
    res.sendFile(__dirname + 'rename.html')
})

obj.post('/findfactorial', encoded, (req, res) => {
    var num= parseInt(req.body.num1)

    function fact(number){

    }

   res.send(`factorial is ${fact(num)}`)
})


obj.listen(3000, () => console.log("Server running on port 3000"))