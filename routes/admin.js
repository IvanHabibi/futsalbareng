var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
    db.User.findAll()
      .then(users=>{
        res.render('User',{
            users:users

        })
      })

});



module.exports = router;
