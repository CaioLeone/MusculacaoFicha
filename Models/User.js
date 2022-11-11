const Sequelize = require('sequelize');
const connection = require('../database/database');

const User = connection.define('Users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_height: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    user_weight: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    user_age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

//User.sync({force: true});

module.exports = User;