const express = require("express");
const router = express.Router();
const Exercise = require("../Models/Exercise");

router.get("/admin/exercises/new", (req, res) => {
    res.render("admin/exercise/new");
});

//CREATE EXERCISE
router.post("/admin/exercise/create", (req, res) => {
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

module.exports = router;