import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [carga, setCarga] = useState(true);
  const [vacio, setVacio] = useState(true);
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuth] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
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

  function handleAddToCart(product) {
    const productExist = cart.find((item) => item.id === product.id);

    if (productExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
      setVacio(false);
    }
    toast.success("El producto se ha agregado al carrito");
  }

  const vaciarCart = async () => {
    const confirm = Swal.fire({
      title: "¿Estas seguro?",
      text: "Esto eliminara todos los productos del carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, vaciar",
      cancelButtonText: "Cancelar",
    });
    if ((await confirm).isConfirmed) {
      setCart([]);
      setVacio(true);
      Swal.fire({
        title: ":(",
        text: "Carrito vacio!.",
        icon: "success",
      });
    }
  };

  const eliminarCant = (id) => {
    setCart(
      cart.map((product) =>
        product.id === id
          ? { ...product, cantidad: Math.max((product.cantidad || 1) - 1, 1) }
          : product
      )
    );
  };

  const agregarCant = (id) => {
    setCart(
      cart.map((product) =>
        product.id === id
          ? { ...product, cantidad: (product.cantidad || 1) + 1 }
          : product
      )
    );
  };

  const eliminarProd = async (id) => {
    const confirm = Swal.fire({
      title: "¿Estas seguro?",
      text: "Esto eliminara el producto del carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    });

    if ((await confirm).isConfirmed) {
      const deleteProd = cart.filter((product) => product.id !== id);
      setCart(deleteProd);
      Swal.fire({
        title: ":(",
        text: "Producto eliminado!.",
        icon: "success",
      });
      if (cart.length == 1) {
        setVacio(true);
      }
    }
  };

  const productosFiltrados = products.filter((product) =>
    product?.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  //Total $ de productos

  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.cantidad || 1),
    0
  );

  const comprarCart = async () => {
    if (isAuthenticated == false) {
      const confirm = Swal.fire({
        title: "",
        text: "Para finalizar la compra debes iniciar sesion.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Iniciar sesion",
        cancelButtonText: "Cancelar",
      });
      if ((await confirm).isConfirmed) {
        navigate("/login");
      }
      return;
    }
    setCart([]);
    setVacio(true);
    Swal.fire({
      title: "Compra finalizada!",
      icon: "success",
      draggable: true,
    });
  };

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
        eliminarProd,
        isAuthenticated,
        setIsAuth,
        productosFiltrados,
        busqueda,
        setBusqueda,
        total,
        comprarCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
