import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js';
import bodyParser from 'body-parser';

const app = express();

//Configuracion avanzada: Permitir dominios especificos
/*const corsOptions = {
    origin: ['https://example.com', 'https://anotherdomain.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};
app.use(cors(corsOptions));*/

//Usando express router
//Configuracion basica: Permitir todos los origines
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.use('/api', productsRouter);

app.use('/auth', authRouter);

app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta invalida');
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
})