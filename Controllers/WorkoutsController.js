const express = require("express");
const router = express.Router();
const Workout = require("../Models/Workout");

router.get("/admin/workouts/new", (req, res) => {
    res.render("admin/workouts/new");
});

//CREATE WORKOUT
router.post("/workouts/save",(req, res) =>{
    var workout_name = req.body.workout_name;
    var period_Init = req.body.period_Init;
    var period_End = req.body.period_End;

    if(workout_name != undefined && (period_Init != undefined && period_End != undefined)){
        Workout.create({
            workout_name: workout_name,
            period_Init: period_Init,
            period_End: period_End
        }).then(() => {
            
        })
    }else{
        res.render("admin/workouts/new");
    }
});

//SHOW WORKOUTS
router.get("/admin/workouts", (req, res) => {
    Workout.findAll().then(workouts => {
        res.render("admin/workouts/index", {workout_name: workout_name, period_Init: period_Init, period_End: period_End});
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
    var period_Init = req.body.period_Init;
    var period_End = req.body.period_End;

    Workout.update({
        workout_name: workout_name,
        period_Init: period_Init,
        period_End: period_End
    },{
        where:{
            id: id
        }
    }).then(() => {
        res.redirect("/admin/workouts");
    })
});

module.exports = router;