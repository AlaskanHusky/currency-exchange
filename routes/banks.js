var express = require('express');
var router = express.Router();
// require controller modules
const bank_controller = require('../controllers/bankController');
// List of banks
router.get('/', function(req, res) {
  bank_controller.getAllBanks().then(data => {
    res.json(data);
  })
});

router.get('/:bank', function(req, res) {
  bank_controller.getBankInfo(req.params.bank).then(data => {
    res.json(data);
  })
});

module.exports = router;
