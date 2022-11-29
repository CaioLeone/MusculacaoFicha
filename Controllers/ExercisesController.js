const express = require("express");
const router = express.Router();
const Exercise = require("../Models/Exercise");
const Muscle = require("../Models/Muscle");
const Equipament = require("../Models/Equipament");

//EXERCISES INDEX 
router.get("/admin/exercises", (req, res) => {
    Exercise.findAll({
        include: [{model: Muscle, model: Equipament}]
    }).then(exercises => {
        res.render("admin/exercises/index", {exercises: exercises});
    })
});

//NEW EXERCISES
router.get("/admin/exercises/new", (req, res) => {
    Muscle.findAll().then(muscles => {
        Equipament.findAll().then(equipaments => {
            res.render("admin/articles/new", {muscles: muscles, equipaments: equipaments})
        })
    })
});
/*
//SAVE EXERCISES
router.post("/admin/exercises/save", (req, res) => {
    var exerc_name = req.body.exerc_name;
    var muscle = req.body.muscle;
    var equipament = req.body.equipament;

    Exercise.create({
        exerc_name: exerc_name,
        muscleId: muscle,
        equipamentId: equipament
    }).then(() => {
        res.redirect("/admin/exercises");
    })
});

//DELETE EXERCISES
router.post("/admin/exercises/delete", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            Exercise.destroy({
                where:{
                    id: id
                }
            }).then(() => {
                res.redirect("admin/exercises");
            });
        }else{//IF NOT NUMBER
            res.redirect("admin/exercises");
        }
    }else{//IF NULL
        res.redirect("admin/exercises");
    }
});

//EDIT EXERCISES
router.get("/admin/exercises/edit/:id", (req, res) => {
    var id = req.body.id;

    if(isNaN(id)){
        res.redirect("/admin/articles");
    }

    Exercise.findByPk(id).then(exercise => {
        if(exercise != undefined){
            Muscle.findAll().then(muscles => {
                Equipament.findAll().then(equipaments => {
                    res.render("admin/exercises/edit", {exercise: exercise, muscle: muscle, equipament: equipament});
                })
            })
        }else{
            res.render("admin/exercises");
        }
    }).catch(error => {
        res.redirect("admin/exercises");
    })
});

//UPDATE EXERCISE
router.post("/exercises/update", (req,res) => {
    var exerc_name = req.body.exerc_name;
    var muscle = req.body.muscle;
    var equipament = req.body.equipament;

    Exercise.update({exerc_name: exerc_name, muscleId: muscle, equipamentId: equipament}, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/exercises");
    }).catch(error => {
        res.redirect("/");
    })
});

//PAGINATION
*/
module.exports = router;