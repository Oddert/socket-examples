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

io.on('connection', socket => {
  console.log(`User connected: ${socket.client.id}`)
  socket.emit('addItem', 'Hello new user')
  const timer = setInterval(() => {
    socket.emit('addItem', Math.floor(Math.random()*1000))
  }, 15000)
  socket.on('userAdd', payload => {
    console.log(`${socket.client.id} added: ${payload}`)
    socket.emit('addItem', `${socket.client.id}: ${payload}`)
    socket.broadcast.emit('addItem', `${socket.client.id}: ${payload}`)
  })
})

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/build/index.html')))
