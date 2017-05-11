var express = require('express');
var router = express.Router();
// require models
var ATM = require('../models/atm');
// List of currencies routes
router.get('/', function(req, res) {
  ATM.find({}, (err, result) => {
      res.json(result);
  });
});

module.exports = router;
