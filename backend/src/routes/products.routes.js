import express from 'express';

import * as productController from '../controllers/products.controllers.js';

const router = express.Router();

router.get('/products', productController.getAllProducts);

router.get('/products/:id', productController.getProductById);

router.post('/create', productController.createProduct);

router.put('/update/:id', productController.updateProduct);

router.delete('/delete/:id', productController.deleteProduct);

export default router;