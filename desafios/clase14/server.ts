import express from 'express'

const app: express.Application = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT: number = 8080


app.get('/', (req: express.Request, res: express.Response) => {
    res.send('¡Hola Mundo! Desafío 14 desde Typescript');
});

app.get('/api/listar', (req: express.Request, res: express.Response) => {
    const msg: string = 'Supuesta ruta para listar'
    res.send(msg);
});


const server: express.Server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})

server.on('error', (err: Error) => console.log(err))