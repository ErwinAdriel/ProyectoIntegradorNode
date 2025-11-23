import * as productService from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await productService.getProductById(id);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
}

export const createProduct = async (req, res) => {
    const {name, price, stock} = req.body;
    const newProduct = {
        name,
        price,
        stock
    };
    await productService.createProduct(newProduct);
    res.status(200).json({ menssage: 'Producto creado exitosamente!' });
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const product = await productService.getProductById(id);
    if(product){
        await productService.deleteProduct(id);
        res.status(200).json({ menssage: 'Producto eliminado exitosamente!' });
    }else{
        res.status(404).json({ menssage: 'Producto no encontrado!' });
    }
    
}