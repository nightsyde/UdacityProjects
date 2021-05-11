var path = require('path')
const express = require('express')
const portID = 9000;
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(portID, function () {
    console.log(`Example app listening on port ${portID}!`)
})

 app.get('/test', function (req, res) {
     res.send(mockAPIResponse)
 })