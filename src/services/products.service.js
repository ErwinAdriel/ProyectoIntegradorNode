import * as productService from '../models/products.model.js';

const products = [
    {
        "id": 1,
        "name": "Product 1",
        "price": 10000
    },
    {
        "id": 2,
        "name": "Product 2",
        "price": 2000
    }
]

export const getAllProducts = () => {
    return productService.getAllProducts();
};

export const getProductById = (id) => {
    return productService.getProductById(id);
};