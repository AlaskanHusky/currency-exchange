const express = require('express');
const router = express.Router();

const index = require('./index');
const currencies = require('./currencies');
const banks = require('./banks');
const atms = require('./atms');

router.use('/', index); // define route handler for "/"
router.use('/currencies', currencies); // define route handler for "/currencies"
router.use('/banks', banks); // define route handler for "/banks"
router.use('/atm', atms); // define route handler for "/banks"
// catch 404 and forward to error handler
router.get('*', (req, res) => {
  res.send('<h1>404 - Not Found</h1>');
});

module.exports = router;
