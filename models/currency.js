var mongoose = require("mongoose"); // connect Mongoose (MongoDB ODM library)
var Schema = mongoose.Schema; // create Mongoose Schema
// currency scheme definition
var CurrencyScheme = new Schema({
  shortName: {
    type: String,
    unique: true,
    required: true,
  },
  fullName: {
    type: String,
    unique: true,
    required: true,
  }
});

module.exports = mongoose.model('Currency', CurrencyScheme); // export model
