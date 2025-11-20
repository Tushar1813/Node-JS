

var exp = require("express")
var obj = exp()
var encoded = exp.urlencoded({ extended: true })
var fs = require("fs")

// Serve HTML file
obj.get('/', (req, res) => {
    res.sendFile(__dirname + '/filedelete.html')
})

// Handle delete request
obj.post('/deletefile', encoded, (req, res) => {
    var filename = req.body.filename

    fs.unlink(filename, (err) => {
        if (err) {
            res.send("Error deleting file or file not found!")
        } else {
            res.send("File deleted successfully!")
        }
    })
})

obj.listen(3002, () => console.log("Server running on port 3002"))
