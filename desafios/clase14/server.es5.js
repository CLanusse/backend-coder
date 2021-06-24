'use strict';

var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var PORT = 8080;

app.get('/', function (req, res) {
    res.send('¡Hola Mundo! Desafío 14 desde Babel');
});

var server = app.listen(PORT, function () {
    console.log('Servidor escuchando en puerto ' + PORT);
});

server.on('error', function (err) {
    return console.log(err);
});
