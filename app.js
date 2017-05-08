//Windows
//SET DEBUG=currency-exchange:* & npm run devstart
var express = require("express"); // connect Express
var mongoose = require('mongoose'); // connect Mongoose
var path = require('path');
var routes = require('./routes/routes');
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
// connect routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

module.exports = app;
