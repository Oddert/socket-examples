const express       = require('express')
    , app           = express()
    , bodyParser    = require('body-parser')
    , cookieParser  = require('cookie-parser')
    , path          = require('path')
    , socket        = require('socket.io')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')))

const PORT = process.env.PORT || 3000
var server = app.listen(
  PORT,
  () => console.log(`${new Date().toLocaleTimeString()}: Server initialising on PORT: ${PORT}...`)
)

app.route('/').get((req, res) => res.render('index'))

const io = socket(server)

var chat = io
  .of('/chat')
  .on('connection', socket => {
    chat.emit('newItem', 'This is for chat only')
    socket.emit('newItem', 'This is FROM CHAT for any room')
  })

var news = io
  .of('/news')
  .on('connection', socket => {
    news.emit('newItem', 'This is for news only')
    socket.emit('newItem', 'This is FROM NEWS for any room')
  })

var other = io.on('connection', socket => {
  socket.emit('newItem', 'Hello from general')
})
