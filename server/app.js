//Windows
//SET DEBUG=currency-exchange:* & npm run devstart
var express = require("express"); // connect Express
const bodyParser = require('body-parser'); // connect body-parser
var mongoose = require('mongoose'); // connect Mongoose
var path = require('path');
// connect routes
var routes = require('./routes/routes');
// create application object
var app = express();
// path to db on local computer
var dburl = "mongodb://localhost:27017/currencies";
// Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
// connect routes
app.use('/', routes);
//
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/currencies', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/banks', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/atm', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
// connect to MongoDB Server
mongoose.connect(dburl);
// create database connection
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;
