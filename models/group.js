'use strict';
module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define('Group', {
        need_position: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Group.hasMany(models.User,{foreignKey: "id_group"})
            }
        }
    });
    return Group;
};
