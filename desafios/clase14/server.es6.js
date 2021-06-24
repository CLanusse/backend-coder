const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080


app.get('/', (req, res) => {
    res.send('¡Hola Mundo! Desafío 14 desde Babel');
});


const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
})

server.on('error', err => console.log(err))