'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Books', [{
      title: 'Análise da Confiabilidade Estrutural de Vigas em Concreto Armado Submetidas à Flexão Pelo Método Monte Carlo',
      author: 'Larissa Menezes',
      pageQuantity: 85,
      createdAt: new Date("2022-02-11T10:00:00.0Z"),
      updatedAt: new Date("2022-10-19T18:00:00.0Z"),
    }, {
        title: 'A Dança da Morte',
        author: 'Stephen King',
        pageQuantity: '1248',
        createdAt: new Date("2022-01-28T19:37:32.514Z"),
        updatedAt: new Date("2022-01-28T19:37:32.514Z"),
    }], {})
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
