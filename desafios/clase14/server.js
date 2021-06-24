"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var PORT = 8080;
app.get('/', function (req, res) {
    res.send('¡Hola Mundo! Desafío 14 desde Typescript');
});
app.get('/api/listar', function (req, res) {
    var msg = 'Supuesta ruta para listar';
    res.send(msg);
});
var server = app.listen(PORT, function () {
    console.log("Servidor escuchando en http://localhost:" + PORT);
});
server.on('error', function (err) { return console.log(err); });
