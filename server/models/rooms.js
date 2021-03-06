'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.rooms.hasMany(models.roomusage, {
        foreignKey: "roomid",
      });
    }
  }
  rooms.init({
    roomName: DataTypes.STRING,
    costPerHour: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rooms',
  });
  return rooms;
};