import express from 'express';
import {join, dirname} from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);

const app = express();

//app.use(express.static(join(__dirname, 'public')));

const corsOptions = {
    origin: ['https://example.com', 'https://anotherdomain.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));

app.get('/ping', (req, res) => {
    res.send('/pong');
})

app.get('/', (req, res) => {
    res.send('<h1>Bienvenido</h1>');
})

app.get('/usuarios', (req, res) => {
    res.send([
        {name: 'Adriel', edad: 25},
        {name: 'Sofia', edad: 21}
    ]);
})

app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Detalles de productId: ${productId}`)
})

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Informacion del userId: ${userId}`)
})

app.get('/products', (req, res) => {
    const category = req.query.category;
    const price = req.query.price;

    res.send(`Categoria: ${category}, precio: ${price}`);
})

app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta invalida');
})

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
})