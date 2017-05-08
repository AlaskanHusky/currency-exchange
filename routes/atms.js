var express = require('express');
var router = express.Router();
// require controller modules
const atm_controller = require('../controllers/atmController');
// ATM's info
router.get('/:atm', function(req, res) {
  atm_controller.getByATM(req.params.atm).then(data => {
    res.send(data);
  })
});

module.exports = router;
