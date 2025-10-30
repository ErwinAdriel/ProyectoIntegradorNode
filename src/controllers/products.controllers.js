import { allProducts, productById } from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
    res.status(200).json(allProducts());
}

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = productById(id);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
}

