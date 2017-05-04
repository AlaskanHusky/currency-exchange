var mongoose = require("mongoose"); // connect Mongoose (MongoDB ODM library)
var Schema = mongoose.Schema; // create Mongoose Schema
// connect promises
mongoose.Promise = global.Promise;
// atm scheme definition
var ATMScheme = new Schema({
  bank: {
    type: String,
    required: true
  },
  atm_info: {
    id: {
      type: Number,
      unique: true,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  exchange_rates: {
    currency_name: {
      type: String,
      min: 3,
      max: 3,
      required: true,
    },
    purchase_value: {
      type: Number,
      required: true,
    },
    sale_value: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    }
  }
});

module.exports = mongoose.model('ATM', ATMScheme); // export model
