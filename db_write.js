var mongoose = require('mongoose');
var async = require('async');

var ATM = require('./models/atm');
var Currency = require('./models/currency');
var ER = require('./models/exchange_rate');

var dburl = "mongodb://localhost:27017/currencies";

mongoose.connect(dburl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var currencies = [];
var exchangers = [];
var values = [];

function currencyCreate(shortName, fullName, cb) {
  currencyDetail = {
    shortName: shortName,
    fullName: fullName
  }

  var currency = new Currency(currencyDetail);

  currency.save(function(err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Currency: ' + currency);
    currencies.push(currency);
    cb(null, currency)
  });
}

function erCreate(currency, purchase_value, sale_value, cb) {
  erDetail = {
    currency: currency,
    purchase_value: purchase_value,
    sale_value: sale_value
  }

  var exchangeRate = new ER(erDetail);

  exchangeRate.save(function(err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Exchange Rate: ' + exchangeRate);
    values.push(exchangeRate);
    cb(null, exchangeRate)
  });
}

function atmCreate(bank, address, latitude, longitude, er, cb) {
  atmDetail = {
    bank: bank,
    address: address,
    latitude: latitude,
    longitude: longitude,
    er: er
  }

  var atm = new ATM(atmDetail);

  atm.save(function(err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Entry: ' + atm);
    exchangers.push(atm);
    cb(null, atm)
  });
}

function pushCurrencies(cb) {
  async.parallel([
        function(callback) {
          currencyCreate('USD', 'United States Dollar', callback);
        },
        ],
        // optional callback
        cb);
}

function pushER(cb) {
  async.parallel([
        function(callback) {
          erCreate(currencies[0], 1.8660, 1.8750, callback);
        },
        ],
        // optional callback
        cb);
}

function pushATM(cb) {
  async.parallel([
        function(callback) {
          er = {
            values_list: values[0],
            time: new Date("2017-05-02T21:39")
          }
          atmCreate("Абсолютбанк", "ул. Ожешко, 14", 53.683066, 23.833930, er, callback);
        },
        ],
        // optional callback
        cb);
}

async.series([
    pushCurrencies,
    pushER,
    pushATM
],
// optional callback
function(err) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    //All done, disconnect from database
    db.close();
});
