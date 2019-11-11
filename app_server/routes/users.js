var express = require('express');
var router = express.Router();
const ctrlAccount = require('../controllers/account');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
