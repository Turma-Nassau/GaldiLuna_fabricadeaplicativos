'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aplicativo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Aplicativo.belongsTo(models.Usuario, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
    }
  }
  Aplicativo.init({
    nome_aplicativo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    descricao_aplicativo: {
      type: DataTypes.TEXT(200),
      allowNull: false
    },
    valor_aplicativo: {
      type: DataTypes.DOUBLE,
      validate: {
        isNumeric: true
      },
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Aplicativo',
  });
  return Aplicativo;
};