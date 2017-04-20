'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert('Positions', [{
                pos_name: 'Keeper',
                updatedAt: new Date(),
                createdAt: new Date()
            },
            {
                pos_name: 'Back',
                updatedAt: new Date(),
                createdAt: new Date()
            },
            {
                pos_name: 'Striker',
                updatedAt: new Date(),
                createdAt: new Date()
            }

        ], {});
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
