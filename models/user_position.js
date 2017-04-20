'use strict';
module.exports = function(sequelize, DataTypes) {
  var User_Position = sequelize.define('User_Position', {
    id_user: DataTypes.INTEGER,
    id_position: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User_Position;
};