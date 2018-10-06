const express     = require('express')
    , app         = express()
    , bodyParser  = require('body-parser')
    , path        = require('path')
    , socketio    = require('socket.io');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')))

const PORT = process.env.PORT || 3000
var server = app.listen(
  PORT,
  () => console.log(`${new Date().toLocaleTimeString()}: Server initialised on PORT: ${PORT}...`)
)

app.route('/').get((req, res) => res.render('index'))

const io = socketio(server)

io.on('connection', socket => {
  console.log(socket.client.id)
  socket.emit('message', 'Thank you for connecting to the good server')
  socket.on('join-room', payload => socket.join(payload))

  setTimeout(() => {
    const room = 'the-good-place'
    io.in(room).emit('message', 'Everything is fine.')

    io.in('the-bad-place', 'is that the guy who plays kevin?')
  }, 5000)
})
