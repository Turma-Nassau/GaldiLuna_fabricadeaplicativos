'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Aplicativo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_aplicativo: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      descricao_aplicativo: {
        type: Sequelize.TEXT(200),
        allowNull: false
      },
      valor_aplicativo: {
        type: Sequelize.DOUBLE,
        validate: {
          isNumeric: true
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'Usuario',
          key: 'id',
          as: 'userId'
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rendas');
  }
};