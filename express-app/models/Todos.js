const { DataTypes } = require("sequelize");
const todoSequelize = require("../config/database");

// Define the Todo model

const TodoModel = todoSequelize.define(
  "Todo",
  {
    todoId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { tableName: "Todos" }
);

module.exports = TodoModel;
