const Sequelize = require('sequelize');
const connection = require('../database/database');

const Exercise = require("../Models/Exercise");
const Muscle = require("../Models/Muscle");
const Equipament = require("../Models/Equipament");


const Workout = connection.define('workouts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    workout_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    period_Init: {
        type: Sequelize.DATE,
        allowNull: false
    },
    period_End: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

Exercise.hasMany(Muscle);
Muscle.belongsTo(Exercise);

Exercise.hasMany(Equipament);
Equipament.belongsTo(Exercise);

Workout.hasMany(Exercise);
Exercise.belongsTo(Workout);


//Workout.sync({force: true});

module.exports = Workout;