import fs from 'fs';
import path from 'path';

const __dirname = import.meta.dirname;

//Ruta al archivo json que simula bbdd
const dataPath = path.join(__dirname, '../data/products.json');

//Metodo para buscar un producto por su id
export function getProductById(id){
    const products = this.getAllProducts();
    return products.find(product => product.id == id);   
};

export function getAllProducts(){
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
};