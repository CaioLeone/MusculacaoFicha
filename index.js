const express = require('express');
const app = express();
const connection = require("./database/database");

//CONEXAO BANCO DE DADOS
connection
    .authenticate()
    .then(() => {
        console.log("Tamo conectado com o banco,cabeça!");
    }).catch((error) => {
        console.log(error);
    })

app.listen(8080, () =>{
    console.log("Tudo certo na bahia. Serv rodando");
});