var express = require('express')
var obj = new express()
var cookieSession = require('cookie-session')

obj.use(cookieSession({
    name: "session",
    keys: ['my-secret-key'],
    maxAge: 5 * 60 * 1000 // 5 minutes
}))

obj.get('/set-session', (req, res) => {
    req.session.username = "Tushar"
    req.session.city = "Ramanujganj"
    res.send(`Session set <a href="/get">Get</a>`)
})

obj.get('/get', (req, res) => {
    var user = req.session.username
    var city = req.session.city
    res.send(`User: ${user} | City: ${city} <a href="/delete">Delete</a>`)
})

obj.get('/delete', (req, res) => {
    req.session = null
    res.send(`Session deleted <a href="/get">Get</a>`)
})

obj.listen(3000, () => {
    console.log("Server Is Running!!")
})
