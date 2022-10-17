const Sequelize = require('sequelize');
const connection = require('../database/database');

const Exercise = connection.define('Exercises', {
    exerc_name: {
        type: Sequelize.STRING,
        allowNull: false
    } 
})