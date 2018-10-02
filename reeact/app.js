const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.route('/api/test').get((req, res) => res.json({ message: `server @ res ok` }))

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  () => console.log(`${new Date().toLocaleTimeString()}: Server initialising on PORT: ${PORT}...`)
)
