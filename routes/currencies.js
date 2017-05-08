var express = require('express');
var router = express.Router();
// require controller modules
var currency_controller = require('../controllers/currencyController');
// List of currencies routes
router.get('/', function(req, res) {
  currency_controller.getAllCurrencies().then(data => {
    res.json(data);
  })
});

module.exports = router;
