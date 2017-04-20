var db = require('../models');
var util = {};
var models = require('../models/index');


util.isUser = function(input) {
  return new Promise((res, rej) => {
    db.User.findOne({
        where: {
          username: input
        }
      })
      .then((user) => {
        console.log(user);
        if (user === null) {
          rej(false)
        } else {
          res(user.id)
        }
      })
      .catch(() => {
        console.log('ada error di db')
      })
  })
}


util.isEnough = function(arrGroup, newPos) {
  if (newPos === 'Keeper') {
    if (countInArray(arrGroup, newPos) < 1) {
      return true
    } else {
      return false
    }
  }
  if (newPos === 'Back') {
    if (countInArray(arrGroup, newPos) < 2) {
      return true
    } else {
      return false
    }
  }
  if (newPos === 'Striker') {
    if (countInArray(arrGroup, newPos) < 2) {
      return true
    } else {
      return false
    }
  }
}

function countInArray(array, what) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === what) {
      count++;
    }
  }
  return count;
}

module.exports = util;
