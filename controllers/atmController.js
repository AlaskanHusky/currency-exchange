var ATM = require('../models/atm');

const atmFields = "bank atm_info exchange_rates";
// Display ATM info
exports.getByATM = (atm) => {
  return ATM.find({
    'atm_info.id': atm
  }).select(atmFields);
}
