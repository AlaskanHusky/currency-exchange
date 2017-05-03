var mongoose = require("mongoose"); // connect Mongoose (MongoDB ODM library)
var Schema = mongoose.Schema; // create Mongoose Schema
//
mongoose.Promise = global.Promise;
// atm scheme definition
var ATMScheme = new Schema({
  bank: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    unique: true,
    required: true,
  },
  longitude: {
    type: Number,
    unique: true,
    required: true,
  },
  er: {
    values_list: {
      type: [Schema.ObjectId],
      ref: 'exchange_rate',
      required: true,
    },
    time: {
      type: Date,
      required: true,
    }
  }
});

module.exports = mongoose.model('ATM', ATMScheme); // export model
