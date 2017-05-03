var mongoose = require("mongoose"); // connect Mongoose (MongoDB ODM library)
var moment = require("moment");
var Schema = mongoose.Schema; // create Mongoose Schema
// set region
moment.locale('ru');
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
      type: String,
      required: true,
    }
  }
});

ATMScheme
.virtual('currencies_rate_time_formatted')
.get(function () {
  return moment(this.er.time, 'HH:mm DD.MM.YYYY');
});

module.exports = mongoose.model('ATM', ATMScheme); // export model
