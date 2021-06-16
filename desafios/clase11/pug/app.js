const express = require('express')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080

app.set('view engine', 'pug')
app.set('views', "./views")
app.use(express.static('public'))


app.get('/', (req, res)=>{
    res.send('Desafio 11 pug')
})

const router = require('./routes/router')

app.use('/api', router)


const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', (error) => {
    console.log('Error en el servidor ', error)
})