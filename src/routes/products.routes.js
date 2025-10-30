import express from 'express';
import { getAllProducts, getProductById } from '../controllers/products.controllers.js';

const router = express.Router();

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products', (req, res) => {
    res.send('Producto creado');
})

export default router;