const Sequelize = require("sequelize");
const connection = require("../database/database");

const Muscle = connection.define('muscles', {
    Muscle_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})