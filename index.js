const express = require('express');
const app = express();
const connection = require("./database/database");
const bodyParser = require("body-parser");
//const session = require("express-session");



//CONEXAO BANCO DE DADOS
connection
    .authenticate()
    .then(() => {
        console.log("Tamo conectado com o banco,cabeça!");
    }).catch((error) => {
        console.log(error);
    })

app.listen(3030, () =>{
    console.log("Tudo certo na bahia. Serv rodando");
});

//VIEW ENGINE
app.set('view engine', 'ejs');

//STATIC
app.use(express.static('public'));

//BODY-PARSER
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
