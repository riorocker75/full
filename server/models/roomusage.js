'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roomusage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     models.client.belongsTo(model.client, {
       foreignKey: "clientId",
     });
      models.rooms.belongsTo(model.rooms, {
        foreignKey: "roomid",
      });
    }
  }
  roomusage.init({
    clientId: DataTypes.INTEGER,
    roomid: DataTypes.INTEGER,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    bookingDate: DataTypes.DATE,
    quotaUsed: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'roomusage',
  });
  return roomusage;
};