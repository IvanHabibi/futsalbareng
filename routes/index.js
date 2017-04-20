var express = require('express');
var router = express.Router();
var db = require('../models');
//var helper = require('../helpers/util');

/* GET home page. */
router.get('/', function(req, res, next) {
  var input = req.
  res.render('index', {
    title: 'Express'
  });
});



module.exports = router;
