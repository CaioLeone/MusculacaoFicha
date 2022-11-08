const express = require('express');
const app = express();
const connection = require("./database/database");
const bodyParser = require("body-parser");
//const session = require("express-session");

//IMPORT CONTROLLER
const equipamentsController = require("./Controllers/EquipamentsController");
const exercisesController = require("./Controllers/ExercisesController");
//const workoutController = require("./Controllers/WorkoutsController");
const musclesController = require("./Controllers/MusclesController");
const userController = require("./Controllers/UsersController");

//MODELS IMPORT
const Equipament = require("./Models/Equipament");
const Exercise = require("./Models/Exercise");
//const Workout = require("./Models/Workout");
const Muscle = require("./Models/Muscle");
const User = require("./Models/User");

//CONTROLLERS ROUTES 
app.use("/", equipamentsController);
app.use("/", exercisesController);
//app.use("/", workoutController);
app.use("/", musclesController);
app.use("/", userController);

//CONEXAO BANCO DE DADOS
connection
    .authenticate()
    .then(() => {
        console.log("Tamo conectado com o banco,cabeça!");
    }).catch((error) => {
        console.log(error);
    })

app.listen(3030, () =>{
    console.log("Tudo certo na bahia. Serv rodando na porta 3030");
});

//VIEW ENGINE
app.set('view engine', 'ejs');

//STATIC
app.use(express.static('public'));

//BODY-PARSER
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
