const express = require('express')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))
const PORT = 8080

app.get('/', (req, res)=>{
    res.send('Bienvenidos al desafío 8')
})

const router = require('./routes/router')

app.use('/api', router)


const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', (error) => {
    console.log('Error en el servidor ', error)
})