let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./config/db');

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
  useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)

// Set up express js port
const plantDescriptionRoute = require('./routes/plantDescription.route')
const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/assets', express.static('public'));
app.use('/', express.static(path.join(__dirname, 'dist/kiwi')));
app.use('/api/plant-description', plantDescriptionRoute)

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
/* app.use((req, res, next) => {
  next(createError(404));
}); */

// error handler
app.use(function (err, req, res, next) {
  if (err.message !== 'Unexpected token " in JSON at position 0')
    console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.get('/', (req, res) => {
  res.render('pages/index', {test: 'helloworld'})
})