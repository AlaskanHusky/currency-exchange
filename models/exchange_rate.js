var mongoose = require("mongoose"); // connect Mongoose (MongoDB ODM library)
var Schema = mongoose.Schema; // create Mongoose Schema
// exchange rate scheme definition
var ERScheme = new Schema({
  currency: {
    type: Schema.ObjectId,
    ref: 'Currency',
    required: true,
  },
  purchase_value: {
    type: Number,
    required: true,
  },
  sale_value: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('ER', ERScheme); // export model
