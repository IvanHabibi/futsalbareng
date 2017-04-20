var db = require('../models');

module.exports={
   isUser : function(input) {
     db.User.findOne({where:{username : input}})
     .then(()=>{
       console.log('ketemu');
     })
   }
}
