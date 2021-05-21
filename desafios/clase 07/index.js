
const fs = require('fs')
const express = require('express')

const app = express()
const PORT = 8080

let visitasItems = 0
let visitasItemRandom = 0

const randomNumber = (min, max) => {
    return Math.round(Math.random() * ((max) - min) + min)
}

app.get('/', (req, res)=>{
    res.send('<h1>Bienvenido al desafío Clase 7 - Express </h1>')
})

app.get('/items', (req, res)=>{
    visitasItems++

    try {
        const lectura = fs.readFileSync('./productos.txt', 'utf-8')
        const productos = JSON.parse(lectura)
        
        const respuesta = JSON.stringify({
            items: productos,
            cantidad: productos.length
        }, null, 4)
        res.send(respuesta)

    } catch (error) {
        console.log(error)
        res.send(`Productos no encontrados`)
    }
})

app.get('/item-random', (req, res)=>{
    visitasItemRandom++

    try {
        const lectura = fs.readFileSync('./productos.txt', 'utf-8')
        const productos = JSON.parse(lectura)
        
        const num = randomNumber(0, productos.length - 1)

        const respueta = JSON.stringify({
            item: productos[num]
        })
        res.send(respueta)

    } catch (error) {
        console.log(error)
        res.send(`Productos no encontrados`)
    }
})

app.get('/visitas', (req, res)=>{
    const respuesta = JSON.stringify({
        visitas: {
            items: visitasItems,
            item: visitasItemRandom,
        }
    }, null, 4)

    res.send(respuesta)
})


const server = app.listen(PORT, ()=>{
    console.log('Server escuchado en puerto: ' + PORT)
})
server.on('error', error => {
    console.log('Error al iniciar: ' + error)
})

