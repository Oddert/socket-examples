const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , path = require('path')
    , socket = require('socket.io')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 5000
var server = app.listen(
  PORT
  , () => console.log(`${new Date().toLocaleTimeString()}: Server initialised on PORT: ${PORT}...`)
)

const io = socket(server)

io.on('connection', socket => {
  console.log(`User connected: ${socket.client.id}`)
  const timer = setInterval(() => {
    socket.emit('addItem', Math.floor(Math.random()*1000))
  }, 5000)
})
