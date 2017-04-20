'use strict';
module.exports = function(sequelize, DataTypes) {
  var Position = sequelize.define('Position', {
    pos_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Position.belongsToMany(models.User, {
            through: 'User_Position',
            foreignKey: 'id_position'
        })
      }
    }
  });
  return Position;
};
