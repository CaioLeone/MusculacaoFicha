const Sequelize = require("sequelize");
const connection = require("../database/database");
//IMPORT MODELS
const Muscle = require("../Models/Muscle");
const Equipament = require("../Models/Equipament");

const Exercise = connection.define('exercises', {
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

Exercise.hasMany(Muscle);
Muscle.belongsTo(Exercise);

Exercise.hasMany(Equipament);
Equipament.belongsTo(Exercise);

//Exercise.sync({force: true});

module.exports = Exercise;