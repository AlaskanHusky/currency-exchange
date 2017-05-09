var express = require('express');
var router = express.Router();
// require controller modules
router.get('/', function(req, res, next) {
  res.redirect('/currencies');
});

module.exports = router;
