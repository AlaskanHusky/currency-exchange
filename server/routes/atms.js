var express = require('express');
var router = express.Router();
// require controller modules
var ATM = require('../models/atm');
// ATM's info
router.get('/:id', function(req, res) {
  const query = {'atm_info.id' : req.params.id};

  ATM.find(query, (error, result) => {
        error && res.json({ error });
        !result && res.json({ error: 'ATM not found' });
        res.json(result);
    });
});

module.exports = router;
