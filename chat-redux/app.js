const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , path = require('path')
    , socket = require('socket.io')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/client/build')))

const PORT = process.env.PORT || 5000
var server = app.listen(
  PORT
  , () => console.log(`${new Date().toLocaleTimeString()}: Server initialised on PORT: ${PORT}...`)
)

const io = socket(server)

io.on('connect', socket => {
  console.log(`User ${socket.client.id} connected`)
})

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/build/index.html')))
