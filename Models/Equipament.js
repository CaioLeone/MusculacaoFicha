const Sequelize = require("sequelize");
const connection = require("../database/database");

const Equipament = connection.define('equipaments', {
    equip_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})