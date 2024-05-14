const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Stats = sequelize.define("Stats", {
  statsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  todosTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  todosDone: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  todosUndone: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Stats;
