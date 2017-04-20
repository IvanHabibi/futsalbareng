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
  position = position + ",";
  db.Group.create({
    group_name: nama,
    token: position
  }).then(result => {
    db.Group.findAll({
      where: {
        group_name: nama
      }
    }).then(group => {
      db.User.update({
        status: 'wait',
        id_group: group[0].id
      }, {
        where: {
          id: id
        }
      }).then(action => {
        res.redirect('/group?id=' + group[0].id);
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
  let position = req.query.position;
  db.User.update({
    status: 'searching'
  }, {
    where: {
      id: id
    }
  }).then(result => {
    db.User.findById(id)
      .then(users => {
        if (users.id_group == null) {
          setTimeout(function() {
            res.redirect('/home/search?id=' + id + "&position=" + position);
          }, 2000);
        } else {
          db.Group.findById(users.id_group)
            .then(groups => {
              let temp = groups.token + position + ",";
              console.log("Isi Temp " + temp);
              db.Group.update({
                token: temp
              }, {
                where: {
                  id: users.id_group
                }
              }).then(upt => {
                res.redirect('/group?id=' + users.id_group);
              })
            })
        }
      })
  })
})
module.exports = router;
