var express = require('express');
var router = express.Router();
var db = require('../models');
//var helper = require('../helpers/util');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Welcome to Futsal Bareng' });

});



module.exports = router;
