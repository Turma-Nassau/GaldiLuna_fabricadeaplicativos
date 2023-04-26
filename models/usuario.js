'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Aplicativo,{onDelete:'CASCADE', onUpdate:'CASCADE'})
    }
  }
  Usuario.init({
    nome: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    sobrenome: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    senha: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        len: [6, 10]
      }
    },
    telefone: {
      type: DataTypes.NUMERIC(15),
      allowNull: false
    },
    ideia: {
      type: DataTypes.TEXT(200),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};

//module.exports = Usuario;

//FALTA ID DO USUÁRIO