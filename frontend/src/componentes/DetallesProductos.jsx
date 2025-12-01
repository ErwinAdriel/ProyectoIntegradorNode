import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Error from "../layout/Error404";
import { CartContext } from "../context/CartContext";

export default function DetallesProductos() {
  const { products, handleAddToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find((producto) => producto.id == id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-35 overflow-y-auto">
      {product ? (
        <div className="w-full lg:flex justify-between py-5 px-5 lg:px-20">
          <title>{`${product.name} | AvComputing`}</title>
          <div className="lg:w-1/2 lg:mr-[50px]">
            <div>
              <p className="text-2xl font-medium text-slate-900 mb-4">
                {product.name}
              </p>
            </div>
            <div className="w-full sm:h-[500px] h-[300px] border border-slate-300 flex justify-center items-center overflow-hidden relative">
              <img src={`${product.img}`} alt={product.name} />
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full lg:mt-0 mt-5">
              <div className="mb-7 sm:mt-10">
                <span className="text-2xl font-normal">$ {product.price}</span>
                <div className="text-sm text-gray-400 mt-1 pb-3 border-b">
                  <span>
                    Precio sin impuestos nacionales: $
                    {Math.floor(product.price / 1.27)}
                  </span>
                </div>
              </div>
              <div className="text-normal">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-10 border w-full h-[50px] cursor-pointer"
              >
                <div className="flex space-x-2 bg-black text-white items-center justify-center text-sm font-semibold h-[50px]">
                  <span class="text-2xl">
                    <IoCartOutline />
                  </span>
                  <span>Agregar al carrito</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}
