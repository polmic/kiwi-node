let express = require('express'),
  path = require('path'),
  cors = require('cors'),
  bodyParser = require('body-parser')

// Connecting to mongoDB
require('./connect_database')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))

require('./routes')(app)

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})