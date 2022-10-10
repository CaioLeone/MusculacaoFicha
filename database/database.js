const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('FichaMusculaca', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.export = database;