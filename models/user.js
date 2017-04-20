'use strict';
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: DataTypes.STRING,
        phone: DataTypes.STRING,
        status: DataTypes.STRING,
        email: DataTypes.STRING,
        id_group: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                User.belongsToMany(models.Position, {
                    through: 'User_Position',
                    foreignKey: 'id_user'
                })

                User.belongsTo(models.Group, {
                    foreignKey: "id_group"
                })
            }
        }
    });
    return User;
};
