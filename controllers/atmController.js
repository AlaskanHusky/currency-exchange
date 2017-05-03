var ATM = require('../models/atm');
var async = require('async');

// Display list of all Authors
exports.value_list = function(req, res, next) {

  ATM.find({})
  .exec(function(err, result) {
      if (err) {
        return next(err);
      }
      res.render('table', {
        title: 'Currency Exchange',
        listOfValues: result
      });
    });
};
