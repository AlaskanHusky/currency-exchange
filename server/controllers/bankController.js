var ATM = require('../models/atm');

const bankFields = "_id bank atm_info";
// Display all banks
exports.getAllBanks = () => {
  return ATM.find({}).select(bankFields);
}
// Display info about selected bank
exports.getBankInfo = (bank) => {
  return ATM.find({
    '_id': bank
  }).select(bankFields);
}
