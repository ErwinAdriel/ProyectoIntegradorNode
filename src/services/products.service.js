import * as productModels from '../models/products.model.js';

export const getAllProducts = async () => {
    const products = await productModels.getAllProducts();
    return products;
};

export const getProductById = async (id) => {
    const product = await productModels.getProductById(id);
    return product;
};

export const createProduct = async (productData) => {
    const { name, price, stock} = productData;
    return productModels.saveProduct(name, price, stock);
}

export const updateProduct = async (name, price, stock) => {
    const updateProduct = await productModels.updateProduct(name, price, stock);
    return updateProduct;
}

export const deleteProduct = async (id) => {
    const deleteProduct = await productModels.deleteProduct(id);
    return deleteProduct;
}