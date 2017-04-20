var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
  res.render('addNewUser');
});

router.get('/delete/:id',(req,res,next)=>{
  let id = req.params.id
  db.User.destroy({where : {id:id}})
  .then(()=>{
    db.User_Position.destroy({where: {id_user:id}})
    .then(()=>{
      res.redirect('/admin')
    })
  })
})

router.get('/update/:id',(req,res,next)=>{
  let id = req.params.id
  db.User.findById(id)
  .then(user=>{
    user.getPositions()
    .then(positions=>{
      console.log(user.username)
      for (var i = 0; i < positions.length; i++) {
        console.log(positions[i].pos_name)
      }
    })
  })
})

router.post('/create',(req,res,next)=>{
  username = req.body.username
  phone = req.body.phone
  email = req.body.email
  position = req.body.position
  db.User.create({
    username : username,
    phone : phone,
    status : 'idle',
    email :email,
  }).then(data=>{
    let id = data.get('id');
    for (var i = 0; i < position.length; i++) {
      db.User_Position.create({
        id_position:position[i],
        id_user:id
      }).then(data=>{
        res.redirect('/admin')
      })
    }

  }).catch(err=>{
    console.log(err.message);
  })

})

module.exports = router;
