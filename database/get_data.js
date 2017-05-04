const cheerio = require('cheerio');
const request = require('request');

request({
    uri: 'http://myfin.by/currency/grodno',
    method: 'GET',
    encoding: 'utf8'
  },
  function(err, res, page) {

    const $ = cheerio.load(page); // send page to cheerio
    // Идём по DOM-дереву обычными CSS-селекторами
    $('th.cur-name').each(function(i, element) {
      var currency = $(this).prev();
      console.log(currency.text());
    });
  }
);
