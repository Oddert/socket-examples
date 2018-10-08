const express     = require('express')
    , app         = express()
    , bodyParser  = require('body-parser')
    , path        = require('path')
    , socketio    = require('socket.io')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')))

const PORT = process.env.PORT || 3000
var server = app.listen(
  PORT,
  () => console.log(`${new Date().toLocaleTimeString()}: Server initialised on PORT: ${PORT}...`)
)

const rooms = [
  'the-good-palce',
  'the-bad-palce',
  'Acton'
]

const sec = 1000

app.route('/').get((req, res) => res.render('index', { rooms }))

const io = socketio(server)

io.on('connection', socket => {
  // console.log(`User ${socket.client.id} has connected`)
  socket.emit('message', 'Welcome to the default room!')

  socket.on('join-room', payload => {
    if (socket.room) {
      console.log(`Socket leaving room: ${socket.room}`)
      socket.broadcast.to(socket.room).emit('message', `${socket.client.id} left ${socket.room}`)
      socket.leave(socket.room)
    }
    socket.join(payload)
    socket.emit('joined-room', payload)
    socket.broadcast.to(payload).emit('message', `${socket.client.id} joined room: ${payload}`)
    socket.room = payload
    console.log(`${socket.client.id} joined room: ${payload}`)
  })

  let intr = sec * 60
  setInterval(() => {
    socket.emit('message', `${new Date().toLocaleTimeString()}: Default room ${intr/1000} sec check in`)
  }, intr)

  socket.on('user-message', (id, msg) => {
    // console.log(id, msg)
    socket.emit('message', msg)
    socket.broadcast.to(id).emit('message', msg)
  })

  // socket.on('disconnect', () => console.log(`User ${socket.client.id} disconceted`))
})
