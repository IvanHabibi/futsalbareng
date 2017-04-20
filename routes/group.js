var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  var id = req.query.id;
  db.User.findAll({
      where: {
        status: 'searching'
      }
    })
    .then(ArrResult => {
      if (ArrResult.length > 0) {
        ArrResult.forEach(result => {
          db.User.update({
            status: 'wait',
            id_group: id
          }, {
            where: {
              id: result.id
            }
          })
        })
      }
      db.User.findAll({
          where: {
            id_group: id
          },
          order: [
            ['createdAt', 'ASC']
          ]
        })
        .then(ArrUser => {
          db.Group.findById(id)
            .then(result => {
              var position = result.token;
              position = position.split(",");
              res.render('group', {
                title: 'Group',
                list_user: ArrUser,
                id: result.id,
                nama: result.group_name,
                list_position: position
              })
            })
        })
    })
});


module.exports = router;
