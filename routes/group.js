var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  var id = req.query.id;
  var nama = req.query.nama;
  var p1 = req.query.p1;
  var p2 = req.query.p2 || "";
  var p3 = req.query.p3 || "";
  var p4 = req.query.p4 || "";
  var p5 = req.query.p5 || "";
  var arrP = [];
  arrP.push(p1);
  arrP.push(p2);
  arrP.push(p3);
  arrP.push(p4);
  arrP.push(p5);
  console.log("di group " + id);
  db.User.findAll({
      where: {
        status: 'searching'
      }
    })
    .then(ArrResult => {
      if (ArrResult.length > 0) {
        ArrResult.forEach(result => {
          console.log("id baru diupdate : " + result.id);
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
      console.log("lewat if");
      db.User.findAll({
          where: {
            id_group: id
          }
        })
        .then(ArrUser => {
          res.render('group', {
            title: 'Group',
            list_user: ArrUser,
            id: id,
            nama: nama,
            list_position: arrP
          })
        })
    })
});


module.exports = router;
