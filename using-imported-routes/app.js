const express     = require('express')
    , app         = express()
    , bodyParser  = require('body-parser')
    , path        = require('path')
    , socketio    = require('socket.io')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')))

const PORT = process.env.PORT || 3000
const server = app.listen(
  PORT
  , () => console.log(
    `${new Date().toLocaleTimeString('en-GB')}: Server initilised on PORT: ${PORT}...`
  )
)

app.get('/', (req, res, next) => res.render('index'))

const io = socketio(server)

io.on('connection', require('./utils/routeHandler'))
