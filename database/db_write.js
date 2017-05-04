var mongoose = require('mongoose');
var atmModel = require('../models/atm');

var dburl = "mongodb://localhost:27017/currencies";

mongoose.connect(dburl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

function saveEntry(bank, id, address, latitude, longitude, currency_name, purchase_value, sale_value, date) {

  var modelTemplate = {
    bank: bank,
    atm_info: {
      id: id,
      address: address,
      latitude: latitude,
      longitude: longitude
    },
    exchange_rates: {
      currency_name: currency_name,
      purchase_value: purchase_value,
      sale_value: sale_value,
      date: date
    }
  };

  var atm = new atmModel(modelTemplate);

  atm.save(function(err) {
    if (err) {
      console.log(err);
    }
    console.log('New Entry: ' + atm);
  });
}

saveEntry('Абсолютбанк', 1, 'ул. Ожешко, 14', 53.683066, 23.833930, 'USD', 1.875, 1.892, '23:09 04.05.2017');
saveEntry('Альфа-Банк', 2, 'ул. Горького, 47', 53.690424, 23.826016, 'USD', 1.876, 1.892, '23:09 04.05.2017');
saveEntry('Альфа-Банк', 3, 'ул К. Маркса, 44', 53.677055, 23.839868, 'USD', 1.876, 1.892, '23:09 04.05.2017');
