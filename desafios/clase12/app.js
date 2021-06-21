const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const productos = require('./api/productos')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile('index', { root: __dirname });
});

app.post('/api/productos/guardar', (req, res) => {
    productos.agregar(req.body)
    res.redirect('/')
})

io.on('connection', (socket) => {
    console.log("Usuario conectado")
    socket.emit('actualizar', productos.listar)

    socket.on('guardar', (data) => {
        productos.agregar(data)
        io.sockets.emit('actualizar', productos.listar)
    })
})


http.listen(PORT, () => {
    console.log('Servidor escuchando en http://localhost:'+ PORT);
});

