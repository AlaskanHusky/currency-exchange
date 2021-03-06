var express = require('express');
var router = express.Router();
// require controller modules
var ATM = require('../models/atm');
// List of banks
router.get('/', function(req, res) {
  ATM.find({}, (err, result) => {
      res.json(result);
  });
});

router.get('/:id', function(req, res) {
  const query = {'_id' : req.params.id};

  ATM.find(query, (error, result) => {
        error && res.json({ error });
        !result && res.json({ error: 'Bank not found' });
        res.json(result);
    });
});

module.exports = router;
