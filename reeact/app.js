const express       = require('express')
    , app           = express()
    , bodyParser    = require('body-parser')
    , cookieParser  = require('cookie-parser')
    , path          = require('path')
    , socket        = require('socket.io')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/client/build')))

const PORT = process.env.PORT || 5000
var server = app.listen(
  PORT,
  () => console.log(`${new Date().toLocaleTimeString()}: Server initialising on PORT: ${PORT}...`)
)

const io = socket(server)

io.on('connection', socket => {
  console.log(`A user connected: ${socket.client.id}`)
  const counter = setInterval(() => {
    socket.emit('newItem', `Server created: ${Math.floor(Math.random() * 30)}`)
  }, 5000)
  socket.on('userAdd', payload => {
    console.log(payload)
    socket.broadcast.emit('newItem', `User ${socket.client.id} added: ${payload}`)
    socket.emit('newItem', `User ${socket.client.id} added: ${payload}`)
  })
})

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/build/index.html')))
