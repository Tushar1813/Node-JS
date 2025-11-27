var express = require('express');
var obj = express();
var cookieParser = require('cookie-parser');

// middleware
obj.use(cookieParser());
obj.use(express.urlencoded({ extended: true })); // required for POST form data

obj.get('/', (req, res) => {
    res.sendFile(__dirname + '/practicecookie.html');
});

obj.post('/set-cookie', (req, res) => {
    var theme2 = req.body.theme1;
    res.cookie('theme', theme2);
    res.send(`Cookie set <a href='/get-cookie'>Get</a>`);
});

obj.get('/get-cookie', (req, res) => {
    var theme3 = req.cookies.theme;
    res.send(`Cookie is ${theme3} <a href='/delete-cookie'>Delete</a>`);
});

obj.get('/delete-cookie', (req, res) => {
    res.clearCookie('theme');
    res.send(`Cookie cleared <a href='/'>Home</a>`);
});

obj.listen(3000, () => {
    console.log("Server Running");
});
