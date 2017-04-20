var express = require('express');
var router = express.Router();
var db = require('../models');
var helper = require('../helpers/utils');

/* GET home page. */

router.get('/',function(req,res,next){
  let username = req.query.username;
  if(username==='admin'){
    db.User.findAll()
      .then(users=>{
        res.render('User',{
            users:users

        })
      })
  }
  helper.isUser(username)
  .then((data) => {
    res.redirect('/home?id='+data)

  })
  .catch(() => {
    res.render('createUser')
  })


})













// router.get('/', function(req, res, next) {
//   let username = req.query.username;
//   if(username==='admin'){
//     db.User.findAll()
//       .then(users=>{
//         res.render('User',{
//             users:users
//
//         })
//       })
//
//   }else{
//     console.log("USER INI "+helper.isUser(username));
//
//     res.redirect('/')
//   }
//
//
//
//
// });



module.exports = router;
