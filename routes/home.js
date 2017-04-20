var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  let key = req.query.id;
  db.User.findById(key)
    .then(result => {
      result.getPositions()
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
  let id = req.query.id;
  let nama = req.query.nama;
  let position = req.query.position;
  //  console.log(id + " - " + nama + " - " + position);
  db.Group.create({
    group_name: nama
  }).then(result => {
    db.Group.findAll({
      where: {
        group_name: nama
      }
    }).then(group => {
      console.log("groupnya " + JSON.stringify(group));
      console.log("id groupnya " + group[0].id);
      db.User.update({
        status: 'wait',
        id_group: group[0].id
      }, {
        where: {
          id: id
        }
      }).then(action => {
        res.redirect('/group?id=' + group[0].id + "&nama=" + nama + "&p1=" + position);
      }).then(err => {
        console.log(err);
      })
    }).then(err => {
      console.log(err);
    })
  }).then(err => {
    console.log(err);
  })
});

router.get('/search', function(req, res, next) {
  let id = req.query.id;
  db.User.update({
    status: 'searching'
  }, {
    where: {
      id: id
    }
  })
})
module.exports = router;
