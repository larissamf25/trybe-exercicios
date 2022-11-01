'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Genres');
  }
};
