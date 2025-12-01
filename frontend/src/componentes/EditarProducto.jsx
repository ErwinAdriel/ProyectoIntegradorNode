import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function EditarProducto({
  isOpen,
  onClose,
  productoSeleccionado,
  onActualizar,
}) {
  const [producto, setProducto] = useState(productoSeleccionado);
  useEffect(() => {
    setProducto(productoSeleccionado);
  }, [productoSeleccionado]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onActualizar(producto);
  };

  return (
    <div class={`${isOpen ? "relative" : "hidden"}`}>
      <div class="fixed inset-0 bg-gray-500/75 "></div>
      <div class="fixed inset-y-20 left-0 sm:inset-y-[20%] sm:left-[10%] lg:left-[25%]">
        <div class="bg-white p-5">
          <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 border-gray-900">
            <h3 class="text-lg font-semibold text-black">Editar Producto</h3>
            <button
              type="button"
              onClick={onClose}
              class="text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl p-1.5 ml-auto inline-flex items-center cursor-pointer"
            >
              <IoMdClose />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="grid grid-cols-2 gap-10 mb-4 sm:grid-cols-3">
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 "
                  placeholder="Example name"
                  value={producto.name || ""}
                  onChange={handleChange}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </div>

              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Precio mayor a 0
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 "
                  placeholder="$1222"
                  value={producto.price || ""}
                  onChange={handleChange}
                />
                {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Imagen URL
                </label>
                <input
                  type="text"
                  id="img"
                  name="img"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
                  value={producto.img || ""}
                  onChange={handleChange}
                />
                {errors.img && <p style={{ color: "red" }}>{errors.img}</p>}
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Descripcion
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 placeholder-gray-400"
                  placeholder="Ingrese una descripcion del producto"
                  value={producto.description || ""}
                  onChange={handleChange}
                ></textarea>
                {errors.description && (
                  <p style={{ color: "red" }}>{errors.description}</p>
                )}
              </div>
            </div>
            <div class="w-full">
              <button
                type="submit"
                class="w-full text-white duration-300 ease-in-out bg-blue-700 hover:bg-blue-800 font-medium cursor-pointer text-sm py-2.5 "
              >
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
