import { useContext, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiAddFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import loading from "../img/loading.gif";
import { AdminContext } from "../context/AdminContext";
import AgregarProducto from "../componentes/AgregarProducto";
import EditarProducto from "../componentes/EditarProducto";

export default function Admin() {
  const {products, isCartOpen, setCartOpen, formEditOpen, setFormEditOpen, seleccionado, setSeleccionado, carga, agregarProducto, eliminarProducto, editarProducto} = useContext(AdminContext);
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white mb-10 py-5 lg:px-20 pt-25">
      <title>Dashboard</title>
      {carga ? (
        <img class="mx-auto" src={loading} alt="loading" />
      ) : (
        <div>
          
          <div className="flex justify-between mt-5">
            <div className="bg-blue-700 text-white hover:bg-blue-900 duration-300 ease-in-out">
              <button onClick={() => setCartOpen(!isCartOpen)}>
                <div className="flex px-4 py-3 cursor-pointer text-normal font-medium">
                  <RiAddFill className="text-2xl my-auto" />
                  <span className="lg:flex hidden">Agregar</span>
                </div>
              </button>
            </div>
            <AgregarProducto
              isOpen={isCartOpen}
              onClose={() => setCartOpen(false)}
              onAgregar={agregarProducto}
            />
            <div class="md:flex border border-slate-400">
              <div class="w-full h-full flex items-center px-2 bg-white">
                <form action="#" class="h-full w-full flex">
                  <IoSearch className="my-auto mx-auto text-2xl text-gray-400" />
                  <input
                    type="text"
                    class="h-full w-full px-4 focus:outline-none placeholder-gray-400"
                    placeholder="Buscar"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 mt-5">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-4">
                    ID
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Nombre
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Imagen
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Descripcion
                  </th>
                  <th scope="col" className="pr-20 py-4">
                    Precio
                  </th>
                  <th scope="col" className="pr-20 py-4">
                    Stock
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {product.id}
                    </th>
                    <td className="px-4 py-3">{product.name}</td>
                    <td className="px-4 py-3">
                      <img
                        src={product.img}
                        className="w-10"
                        alt={product.name}
                      />
                    </td>
                    <td className="px-4 py-3">{product.description}</td>
                    <td className="py-3">$ {product.price}</td>
                    <td className="py-3">{product.stock}</td>
                    <td className="px-4 py-5 flex items-center space-x-3">
                      <button
                        onClick={() => {
                          setFormEditOpen(true);
                          setSeleccionado(product);
                        }}
                      >
                        <div className="text-blue-700 text-xl cursor-pointer hover:text-blue-950">
                          <FaRegEdit />
                        </div>
                      </button>
                      <button onClick={() => eliminarProducto(product.id)}>
                        <div className="text-red-600 text-2xl cursor-pointer hover:text-red-900">
                          <MdDelete />
                        </div>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {formEditOpen ? (
                <EditarProducto
                  isOpen={formEditOpen}
                  onClose={() => setFormEditOpen(false)}
                  productoSeleccionado={seleccionado}
                  onActualizar={editarProducto}
                />
              ) : (
                <></>
              )}
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
