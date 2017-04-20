var express = require('express');
var router = express.Router();
var db = require('../models');
//var helper = require('../helpers/util');

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { title: 'Welcome to Futsal Bareng' });

=======
  res.render('index', {
    title: 'Express'
  });
>>>>>>> a50dcfb7cd4294545a697799e2546e146370e539
});



module.exports = router;
