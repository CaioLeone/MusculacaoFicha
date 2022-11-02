const express = require("express");
const router = express.Router();
const Equipament = require("../Models/Equipament");

router.get("/admin/equipaments/new", (req, res) => {
    res.render("admin/articles/new");
});

//CREATE EQUIPAMENT
router.post("/equipaments/save", (req, res) => {
    var equip_name = req.body.equip_name;
    if(equip_name != undefined){
        Equipament.create({
            equip_name: equip_name
        }).then(() => {

        })
    }else{
        res.redirect("/admin/equipaments/new");
    }
});

//SHOW EQUIPAMENTS
router.get("/admin/equipaments", (req,res) => {
    Equipament.findAll().then(equipaments => {
        res.render("admin/equipaments/index", {equipaments: equipaments});
    });
});

//DELETE BY ID
router.post("/equipaments/delete", (req, res) => {
    var id = req.body.id;
    if(id != undefined){//NOT NULL
        if(!isNaN(id)){//IS A NUMBER
            Equipament.destroy({
                where:{
                    id: id
                }
            }).then(() => {
                res.redirect("admin/equipaments");
            });
        }else{
            res.redirect("/admin/equipaments");
        }
    }else{
        res.redirect("admin/equipaments");
    }
});


//EDIT BY ID
router.get("/admin/equipaments/edit/:id", (req, res) => {
    var id = req.params.id;

    //VALIDATE ID
    if(isNaN(id)){
        res.redirect("/admin/equipaments");
    }
    Equipament.findByPk(id).then(equipament => {
        if(equipament != undefined){
            res.render("admin/equipaments/edit", {equipament: equipament});
        }else{
            res.redirect("/admin/equipaments");
        }
    }).catch(erro => {
        res.redirect("/admin/equipaments")
    })
});

//UPDATE EQUIPAMENT
router.post("/equipaments/update", (req, res) =>{
    var id = req.body.id;
    var equip_name = req.body.equip_name;

    Equipament.update({equip_name: equip_name}, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/equipaments");
    })
});

module.exports = router;