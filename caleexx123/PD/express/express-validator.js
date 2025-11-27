var express = require('express')
var obj = express()
var { body, validationResult } = require('express-validator')

obj.use(express.urlencoded({extended:true}))

obj.get('/', (req, res) => {
    res.sendFile(__dirname + '/reg.html')
})

obj.listen(3000, () => {
    console.log("Server Running!!!")
})
