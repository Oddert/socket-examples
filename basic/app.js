const express     = require('express')
    , app         = express()
    , bodyParser  = require('body-parser')
    , path        = require('path')
    // , http        = require('http').Server(app)
    ,  socket      = require('socket.io')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/node_modules')))
app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3000
var server = app.listen(
  PORT,
  () => console.log(`${new Date().toLocaleTimeString()}: Server initialising on PORT: ${PORT}...`)
)

const io = socket(server)

app.route('/')
    .get((req, res) => res.render('index'))

io.on('connection', socket => {
  console.log(`A user as connected: ${socket.client.id}`)
  const timer = setInterval(() => {
    //will only send to this connection (self)
    socket.emit('listItem', `Server auto-created: ${Math.floor(Math.random()*30)}`)
  }, 5000)
  socket.on('userAdd', payload => {
    //will send to all other connections (excluding self)
    socket.broadcast.emit('listItem', `User ${socket.client.id} added: ${payload}`)
  })
})
