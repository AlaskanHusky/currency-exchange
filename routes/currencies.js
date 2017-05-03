var express = require('express');
var router = express.Router();
// require controller modules
var atm_controller = require('../controllers/atmController');
// List of Currencies Routes
router.get('/', atm_controller.value_list);

module.exports = router;
