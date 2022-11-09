const Sequelize = require('sequelize');
const connection = require('../database/database');
const Exercise = require("../Models/Exercise");

const Workout = connection.define('workouts', {
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

Workout.hasMany(Exercise);
Exercise.belongsTo(Workout);

//Workout.sync({force: true});

module.exports = Workout;