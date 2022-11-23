const express = require('express');
const router = express.Router();
const User = require("../Models/User");

/*
router.get("/admin/users/new", (req, res) => {
    res.render("admin/users/new");
});

//CREATE USER
router.post("/admin/users/create", (req, res) => {
    var user_name = req.body.user_name;
    var user_height = req.body.user_height;
    var user_weight = req.body.user_weight;
    var user_age = req.body.user_age;
    
    if(id != undefined){
        User.create({
            user_name: user_name,
            user_height: user_height,
            user_weight: user_weight,
            user_age: user_age
        }).then(() => {

        })
    }else{
        res.render("admin/users/new");
    }
});

//DELETE BY ID
router.post("/users/delete", (req, res) => {
    var id = body.req.id;

    if(id != undefined){
        if(isNaN(id)){
            User.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.render("admin/users");
            })
        }else{
            res.render("admin/users");
        }
    }else{
        res.render("admin/users");
    }
});

//EDIT USERS
router.get("/admin/users/edit/:id", (req, res) => {
    var id = body.req.id;

    if(isNaN(id)){
        res.redirect("admin/users");       
    }

    User.findByPk(id).then(users => {
        if(id =! undefined){
            res.render("admin/users/edit", {users: users});
        }else{
            res.render("admin/users");
        }
    }).catch(error =>{
        res.render("admin/users");
    })

});

//UPDATE
router.post("/admin/users/update", (req,res) => {
    var id = req.body.id;
    var user_name = req.body.user_name;
    var user_height = req.body.user_height;
    var user_weight = req.body.user_weight;
    var user_age = req.body.user_age;

    User.Update({
        user_name: user_name, 
        user_height: user_height, 
        user_weight: user_weight, 
        user_age: user_age }, 
        {where: {
            id: id
        }
    }).then(() => {
        res.render("admin/users");
    })
});
*/

module.exports = router;