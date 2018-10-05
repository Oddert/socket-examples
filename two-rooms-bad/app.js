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
    console.log(`User id ${socket.client.id} has connected to CHAT`)
    chat.emit('newItem', '(25) This is for chat only')
    socket.emit('newItem', '(26) This is FROM CHAT for any room')

    const chatClock = setInterval(() => {
      // setTimeout(() => {
        console.log(`(30) ${new Date().toLocaleTimeString()} Sending new chat`)
        chat.emit('newItem', `(30) Chat: new message at ${new Date().toLocaleTimeString()}`)
      // }, Math.floor(Math.random()*10000))
    }, 50000)
    chat.on('disconect', () => clearInterval(chatClock))
  })

var news = io
  .of('/news')
  .on('connection', socket => {
    console.log(`User id ${socket.client.id} has connected to NEWS`)
    news.emit('newItem', '(39) This is for news only')
    socket.emit('newItem', '(40) This is FROM NEWS for any room')

    const newsClock = setInterval(() => {
      // setTimeout(() => {
        console.log(`(45) ${new Date().toLocaleTimeString()} Sending new news`)
        news.emit('newItem', `(44) News: something happened at ${new Date().toLocaleTimeString()}`)
      // }, Math.floor(Math.random()*10000))
    }, 50000)
    news.on('disconect', () => clearInterval(newsClock))
  })

// var other = io.on('connection', socket => {
//   socket.emit('newItem', '(51) Hello from general')
// })
