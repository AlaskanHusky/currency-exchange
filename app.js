//Windows
//SET DEBUG=currency-exchange:* & npm run devstart
var express = require("express"); // connect Express
var mongoose = require('mongoose'); // connect Mongoose
var bodyParser = require("body-parser"); // connect library for request parse
var path = require('path');
var atm_controller = require('./controllers/atmController');
// import routes
var index = require('./routes/index');
var currencies = require('./routes/currencies');
// create application object
var app = express();
// path to db on local computer
var dburl = "mongodb://localhost:27017/currencies";
// connect to MongoDB Server
mongoose.connect(dburl);
// create database connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// create parser for json data
var jsonParser = bodyParser.json();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index); // define route handler for "/"
app.use('/currencies', currencies); // define route handler for "/currencies"
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
