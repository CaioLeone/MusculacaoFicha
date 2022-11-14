const express = require("express");
const router = express.Router();
const Exercise = require("../Models/Exercise");

router.get("/admin/exercises/new", (req, res) => {
    res.render("admin/exercises/new");
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
    Exercise.findAll().then(exercises => {
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