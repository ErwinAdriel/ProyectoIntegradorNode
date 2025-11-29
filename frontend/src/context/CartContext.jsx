import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [carga, setCarga] = useState(true);
  const [vacio, setVacio] = useState(true);
  const [error, setError] = useState(false);
  const [precio, setPrecio] = useState();
  const [isAuthenticated, setIsAuth] = useState(false);

  useEffect(() => {
    fetch("/data/data.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(() => {
          setProducts(datos);
          setCarga(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error: ", error);
        setTimeout(() => {
          setCarga(false);
          setError(true);
        });
      });
  }, []);

  //console.log(cart);

  function handleAddToCart(product) {
    setPrecio(product.price);
    const productExist = cart.find((item) => item.id === product.id);

    if (productExist) {
      /*if(productExist.id == product.id){
            setCart([...cart, {...product}])
        }*/
      //Si el producto esta en el carrito
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            if (item.cantidad < product.stock) {
              return { ...item, cantidad: item.cantidad + 1 };
            }

            return item;
          } else {
            return item;
          }
        })
      );
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
      setVacio(false);
    }
  }

  function eliminarCant(product) {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === product.id) {
            if (item.cantidad > 1) {
              return { ...item, cantidad: item.cantidad - 1 };
            } else {
              if (prevCart.length < 2) {
                setVacio(true);
              }
              return null;
            }
          } else {
            return item;
          }
        })
        .filter((item) => item != null);
    });
  }

  function agregarCant(product) {
    setCart((afterCart) => {
      return afterCart
        .map((item) => {
          if (item.id === product.id) {
            if (item.cantidad < product.stock) {
              return {
                ...item,
                cantidad: item.cantidad + 1,
                price: precio + item.price,
              };
            } else {
              return item;
            }
          } else {
            return item;
          }
        })
        .filter((item) => item === item);
    });
  }

  function vaciarCart() {
    setCart([]);
    setVacio(true);
    console.log("Carrito vacio");
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        carga,
        vacio,
        error,
        handleAddToCart,
        eliminarCant,
        agregarCant,
        vaciarCart,
        isAuthenticated, 
        setIsAuth
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
