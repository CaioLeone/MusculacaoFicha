const Sequelize = require("sequelize");
const connection = require("../database/database");

const Equipament = connection.define('equipaments', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    equip_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Equipament.sync({force: true});

module.exports = Equipament;