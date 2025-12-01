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
    const createProduct = productModels.createProduct(productData);
    return createProduct;
}

export const updateProduct = async (id, productData) => {
    const updateProduct = await productModels.updateProduct(id, productData);
    return updateProduct;
}

export const deleteProduct = async (id) => {
    const deleteProduct = await productModels.deleteProduct(id);
    return deleteProduct;
}