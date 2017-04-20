var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  let key = req.query.id;
  db.User.findById(key)
    .then(ArrResult => {
      ArrResult.getPositions()
        .then(arrPosition => {
          res.render('home', {
            title: 'Home',
            list_position: arrPosition,
            id: key
          })
        })
    })
});

router.get('/wait', function(req, res, next) {
  let key = req.query.id;
  db.User.update({

    }, {
      where: {
        id: key
      }
    })
    .then(ArrResult => {
      ArrResult.getPositions()
        .then(arrPosition => {
          res.render('home', {
            title: 'Home',
            list_position: arrPosition,
            id: key
          })
        })
    })
});


module.exports = router;
