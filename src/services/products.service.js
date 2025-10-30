const products = [
    {
        id: 1,
        name: 'Producto 1',
        price: 10000
    },
    {
        id: 2,
        name: 'Producto 2',
        price: 2300
    }
]

export const allProducts = () => {
    return products;
};

export const productById = (id) => {
  return products.find(product => product.id == id);
};
