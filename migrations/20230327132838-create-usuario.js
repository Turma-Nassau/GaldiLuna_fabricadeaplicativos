'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      sobrenome: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      senha: {
        type: Sequelize.STRING(10),
        allowNull: false,
        validate: {
          len: [6, 10]
        }
      },
      telefone: {
        type: Sequelize.NUMERIC(15),
        allowNull: false
      },
      ideia: {
        type: Sequelize.TEXT(200),
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuario');
  }
};