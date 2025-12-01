import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    img: "",
    description: "",
    price: "",
  });

  const [carga, setCarga] = useState(true);
  const [isCartOpen, setCartOpen] = useState(false);
  const [formEditOpen, setFormEditOpen] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);

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

  const agregarProducto = async (product) => {
    try {
      const respuesta = await fetch(
        "http://localhost:3000/api/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      if (!respuesta.ok) {
        throw new Error("Error al agregar producto");
      }
      const data = await respuesta.json();
      setCartOpen(false);
      Swal.fire({
        title: ":)",
        text: "Producto agregado correctamente!",
        icon: "success",
      });
      mostrarProductos();
    } catch (error) {
      console.log(error.message);
    }
  };

  const mostrarProductos = async () => {
    try {
      const respuesta = await fetch(
        "http://localhost:3000/api/products"
      );
      const data = await respuesta.json();
      setProducts(data);
    } catch (error) {
      console.log("Error al cargar los productos", error);
    }
  };

  const eliminarProducto = async (id) => {
    const confirm = Swal.fire({
      title: "¿Estas seguro?",
      text: "Esto eliminara el producto del sistema",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    });

    if ((await confirm).isConfirmed) {
      try {
        const respuesta = await fetch(
          `http://localhost:3000/api/delete/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!respuesta.ok) {
          throw Error("Error al eliminar");
        }
        Swal.fire({
          title: "Eliminado!",
          text: "Producto eliminado correctamente.",
          icon: "success",
        });
        mostrarProductos();
      } catch (error) {
        alert("Hubo un problema al elimnar el producto");
      }
    }
  };

  const editarProducto = async (producto) => {
    const confirm = Swal.fire({
      title: "¿Estas seguro?",
      text: "Esto actualizara los datos del producto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Guardar",
    });

    if ((await confirm).isConfirmed) {
      try {
        const respuesta = await fetch(
          `https://685716ec21f5d3463e54702a.mockapi.io/productos/products/${producto.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(producto),
          }
        );
        if (!respuesta.ok) {
          throw Error("Error al actualizar el producto");
        }
        const data = await respuesta.json();
        Swal.fire(":)", "Producto actualizado exitosamente!", "success");
        setFormEditOpen(false);
        setSeleccionado(null);
        mostrarProductos();
      } catch (error) {
        console.log("Hubo un error al editar", error);
      }
    }
  };

  return (
    <AdminContext.Provider
      value={{
        products,
        isCartOpen,
        setCartOpen,
        formEditOpen,
        setFormEditOpen,
        seleccionado,
        setSeleccionado,
        carga,
        agregarProducto,
        eliminarProducto,
        editarProducto,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
