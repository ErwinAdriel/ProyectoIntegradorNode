import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.routes.js';
import authRouter from './routes/auth.routes.js';
import bodyParser from 'body-parser';
import { authentication } from './middleware/authentication.js';

//App initialization
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/api', productsRouter);
app.use('/auth', authRouter);

//404 handler
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta invalida');
})

//PORT
const PORT = 3000;

//Start server
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
})