//Windows
//SET DEBUG=currency-exchange:* & npm run devstart
var express = require("express"); // connect Express
var path = require('path');
var bodyParser = require('body-parser'); // connect body-parser
var mongoose = require('mongoose'); // connect Mongoose
// connect routes
var index = require('./routes/index');
var currencies = require('./routes/currencies');
var banks = require('./routes/banks');
var atms = require('./routes/atms');
// create application object
var app = express();
// path to db on local computer
var dburl = "mongodb://localhost:27017/currencies";
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, '../public')));
// connect routes
app.use('/', index);
app.use('/api/currencies', currencies);
app.use('/api/banks', banks);
app.use('/api/atm', atms);
// connect to MongoDB Server
mongoose.connect(dburl);
// create database connection
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;
