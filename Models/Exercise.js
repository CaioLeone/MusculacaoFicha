const Sequelize = require('sequelize');
const connection = require('../database/database');

const Exercise = connection.define('Exercises', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    exerc_name: {
        type: Sequelize.STRING,
        allowNull: false
    } 
});

//Exercise.sync({force: true});

module.exports = Exercise;