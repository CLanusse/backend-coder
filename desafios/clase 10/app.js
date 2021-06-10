const express = require('express')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080

const handlebars = require('express-handlebars')

app.engine('hbs', 
    handlebars({
        extname: ".hbs",
        defaultLayout: "index.hbs",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views"
    })
)


app.set('view engine', 'hbs')
app.set('views', "./views")
app.use(express.static('public'))



app.get('/', (req, res)=>{
    res.send('Desafio 10')
})

const router = require('./routes/router')

app.use('/api', router)


const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', (error) => {
    console.log('Error en el servidor ', error)
})