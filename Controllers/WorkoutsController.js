const express = require("express");
const router = express.Router();
const Workout = require("../Models/Workout");

router.get("/admin/workouts/new", (req, res) => {
    res.render("admin/workouts/new");
});

//CREATE WORKOUT
router.post("/workouts/save",(req, res) =>{
    var workout_name = req.body.workout_name;
    var workout_period= req.body.workout_period;
    var workout_reps = req.body.workout_reps;
    var workout_sets = req.body.workout_sets;

    if((workout_name != undefined && workout_period != undefined) && (workout_reps != undefined && workout_sets != undefined)){
        Workout.create({
            workout_name: workout_name,
            workout_period: workout_period,
            workout_reps: workout_reps,
            workout_sets:workout_sets
        }).then(() => {
            
        })
    }else{
        res.render("admin/workouts/new");
    }
});

//SHOW WORKOUTS
router.get("/admin/workouts", (req, res) => {
    Workout.findAll().then(workouts => {
        res.render("admin/workouts/index", {
            workout_name: workout_name, 
            workout_period: workout_period, 
            workout_reps: workout_name,
            workout_sets: workout_sets
        });
    });
});

//DELETE WORKOUT BY ID
router.post("/workouts/delete",(req, res) => {
    var id = req.body.id;
    if(id != undefined){
        if(isNaN(id)){
            Workout.destroy({
                where:{
                    id:id
                }
            }).then(() => {
                res.redirect("/admin/workouts");
            });
        }else{
            res.redirect("/admin/workouts");
        }
    }else{
        res.redirect("/admin/workouts");
    }
});

//EDIT WORKOUT BY ID
router.get("/admin/workouts/edit/:id", (req, res) => {
    var id = req.body.id;

    //VALIDATE IF ID IS NUMBER
    if(isNaN(id)){
        res.redirect("/admin/workouts");
    }

    Workout.findByPk(id).then(workout => {
        if(workout != undefined){
            res.render("admin/workouts/edit", {workout: workout});
        }else{
            res.redirect("/admin/workouts");
        }
    }).catch(erro => {
        res.redirect("/admin/workouts")
    })
});

//UPDATE WORKOUTS
router.post("/admin/workouts/update", (req, res) => {
    var workout_name = req.body.workout_name;
    var workout_period = req.body.workout_period;
    var workout_reps = req.body.workout_reps;
    var workout_sets = req.body.workout_sets;

    Workout.update({
        workout_name: workout_name,
        workout_period: workout_period,
        workout_reps: workout_reps,
        workout_sets: workout_sets
    },{
        where:{
            id: id
        }
    }).then(() => {
        res.redirect("/admin/workouts");
    })
});

module.exports = router;