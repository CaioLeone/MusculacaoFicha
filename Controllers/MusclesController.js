const express = require("express");
const router = express.Router();
const Muscle = require("../Models/Muscle");

router.get("/admin/muscles/new", (req, res) => {
    res.render("admin/muscles/new");
});

//CREATE MUSCLE
router.post("/muscles/save", (req, res) => {
    var muscle_name = req.body.muscle_name;
     
    if(muscle_name != undefined){

        Muscle.create({
            muscle_name: muscle_name
        }).then(() => {
            res.redirect("/admin/muscles")
        })
    }else{
        res.redirect("/admin/muscles/new");
    }
});

/*
//SHOW MUSCLE LIST
router.get("/admin/muscles", (req, res) => {
    Muscle.findAll().then(muscles => {
        res.render("admin/muscles/index", {muscles: muscles});
    });
});

//DELETE BY ID
router.post("/muscles/delete", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        if(isNaN(id)){
            Muscle.destroy({
                where: {
                    id: id
                }
            }).then(() =>{
                res.redirect("admin/muscles");
            });
        }else{
            res.redirect("admin/muscles");
        }
    }else{
        res.redirect("admin/muscles");
    }
});

//EDIT MUSCLE
router.get("/admin/muscles/edit/:id", (req, res) => {
    var id = req.params.id;
    if(isNaN(id)){
        res.redirect("admin/muscles");
    }

    Muscle.findByPk(id).then(muscles =>{
        if(muscles != undefined){
            res.render("admin/muscles/edit", {muscles: muscles});
        }else{
            res.redirect("admin/muscles");
        }
    }).catch(error => {
        res.redirect("admin/muscles");
    })
});

//UPDATE MUSCLE
router.post("/muscles/update", (req, res) => {
    var id = req.body.id;
    var muscle_name = req.body.muscle_name;

    Muscle.update({muscle_name: muscle_name}, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("admin/muscles");
    })
});
*/
module.exports = router;