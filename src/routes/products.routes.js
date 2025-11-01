import express from 'express';
import * as productController from '../controllers/products.controllers.js';

const router = express.Router();

router.get('/products', productController.getAllProducts);

router.get('/products/:id', productController.getProductById);

router.post('/products', (req, res) => {
    res.send('Producto creado');
})

export default router;