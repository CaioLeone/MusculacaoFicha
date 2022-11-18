const express = require("express");
const Equipament = require("../Models/Equipament");
const router = express.Router();
const Exercise = require("../Models/Exercise");
const Muscle = require("../Models/Muscle");

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

//CREATE EXERCISE
router.post("/admin/exercises/create", (req, res) => {
    var exerc_name = req.body.exerc_name;
    if(exerc_name != undefined){
        Exercise.create({
            exerc_name: exerc_name
        }).then(() => {
            
        })
    }else{
        res.redirect("admin/exercises/new");
    }
});

//SHOW EXERCISES 
router.get("/admin/exercises", (req, res) => {
    Exercise.findAll({
        include: [{model: Muscle, model: Equipament}]
    }).then(exercises => {
        res.render("admin/exercises/index", {exercises: exercises});
    });
});

//DELETE BY ID
router.post("/exercises/delete", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        if(isNaN(id)){
            Exercise.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.render("admin/exercises");
            });
        }else{
            res.render("admin/exercises");
        }
    }else{
        res.render("admin/exercises");
    }
});

//EDIT BY ID
router.get("/admin/exercises/edit/:id", (req, res) => {
    var id = req.body.id;
    if(isNaN(id)){
        res.redirect("admin/exercises");
    }

    Exercise.findByPk(id).then(exercises => {
        if(id != undefined){
            res.render("admin/exercises/edit", {exercises: exercises});
        }else{
            res.redirect("admin/exercises");
        }
    }).catch(error => {
        res.redirect("admin/exercises");
    })
});

//UPDATE
router.post("/exercises/update", (req, res) => {
    var id = req.body.id;
    var exerc_name = req.body.id;

    Muscle.update({exerc_name: exerc_name}, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("admin/exercises");
    })
});

module.exports = router;