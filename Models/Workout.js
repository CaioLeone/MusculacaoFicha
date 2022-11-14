const Sequelize = require("sequelize");
const connection = require("../database/database");

const Muscle = require("../Models/Muscle");
const Equipament = require("../Models/Equipament");
const Exercise = require("../Models/Exercise");

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
    workout_period: {
        type: Sequelize.DATE,
        allowNull: false
    },
    workout_reps:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    workout_sets:{
        type: Sequelize.INTEGER,
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