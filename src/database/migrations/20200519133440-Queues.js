'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('queues',
      {
        requestID: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false,
          autoIncrement: false
        },
        deviceID: {
          type: Sequelize.STRING,
          allowNull: false
        },
        storeID: {
          type: Sequelize.STRING,
          allowNull: false
        },
        usedAt: {
          type: Sequelize.DATE,
          allowNull: true
        },
        requestedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('queues');
  }
};
