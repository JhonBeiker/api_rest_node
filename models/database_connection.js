'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Database_Connection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Database_Connection.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    port: DataTypes.STRING,
    host: DataTypes.STRING,
    user: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Database_Connection',
  });
  return Database_Connection;
};