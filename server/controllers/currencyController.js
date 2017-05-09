var ATM = require('../models/atm');

const atmFields = "bank atm_info exchange_rates";

// Display all exchange rates
exports.getAllCurrencies = function(req, res) {
  return ATM.find({}).select(atmFields);
};
