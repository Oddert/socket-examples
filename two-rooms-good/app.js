const express       = require('express')
    , app           = express()
    , bodyParser    = require('body-parser')
    , cookieParser  = require('cookie-parser')
    , path          = require('path')
    , socketio      = require('socket.io')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/public')))

const PORT = process.env.PORT || 3000
var server = app.listen(
  PORT,
  () => console.log(`${new Date().toLocaleTimeString()}: Server initialised on PORT: ${PORT}...`)
)

const rooms = [
  'general',
  'super-secret',
  'staff-elevator'
]

app.route('/').get((req, res) => res.render('index', { rooms }))

app.route('/room/:room').get((req, res) => res.render('room', { room: req.params.room }))

const io = socketio(server)

io.on('connection', socket => {
  socket.emit('server-message', '200: OK')
  socket.on('join-room', payload => console.log(`User ${socket.client.id} wants to join room: ${payload}`))
})
