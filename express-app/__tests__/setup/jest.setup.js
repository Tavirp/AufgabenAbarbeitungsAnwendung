const sequelize = require("../../config/database");

const TestDataUsers = require("./test-data/TestDataUsers");
const TestDataStats = require("./test-data/TestDataStats");
const TestDataTodos = require("./test-data/TestDataTodos");

const User = require("../../models/Users");
const Stats = require("../../models/Stats");
const ToDos = require("../../models/Todos");

module.exports = async () => {
    try {
      await sequelize.dropSchema("users");
      await sequelize.dropSchema("stats");
      await sequelize.dropSchema("todos");
      
      await sequelize.sync();
      // Daten für Tests einfügen
      await User.bulkCreate(TestDataUsers);
      await Stats.bulkCreate(TestDataStats);
      await ToDos.bulkCreate(TestDataTodos);

    } catch (e) {
      console.error("MY DB Issue", e);
    }

  };






