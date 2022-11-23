const Sequelize = require("sequelize");
const connection = require("../database/database");

const Muscle = connection.define('muscles', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    muscle_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Muscle.sync({force: true});

module.exports = Muscle;