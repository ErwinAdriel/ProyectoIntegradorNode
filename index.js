import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.routes.js';

const app = express();

//app.use(express.static('public'));
//app.use(express.static(join(__dirname, 'public')));

//Configuracion avanzada: Permitir dominios especificos
/*const corsOptions = {
    origin: ['https://example.com', 'https://anotherdomain.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};
app.use(cors(corsOptions));*/

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

//Usando express router
//Configuracion basica: Permitir todos los origines
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/api', productsRouter);

app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta invalida');
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
})