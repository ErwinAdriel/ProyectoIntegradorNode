import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Producto({ product }) {
  const { handleAddToCart } = useContext(CartContext);

  return (
    <div
      class="w-full h-full border-1 rounded-xl border-slate-300 hover:border-slate-900 overflow-hidden transition delay-150 duration-300 ease-in-out"
      key={product.id}
    >
      <Link to={`/productos/${product.id}`}>
        <div>
          <img src={`${product.img}`} alt={product.name} />
        </div>
      </Link>
      <div class="flex-col justify-center items-center border-t border-gray-300">
        <div class="flex justify-center mt-4">
          <span class="text-lg sm:text-sm text-slate-800 font-extralight">
            {product.name}
          </span>
        </div>
        <div class="flex justify-center mt-1">
          <span class="font-bold text-xl sm:text-lg font-600">
            $ {product.price}
          </span>
        </div>
        <div class="flex flex-col my-4 space-y-2">
          <Link to={`/productos/${product.id}`} class="w-[70%] mx-auto">
            <div class="cursor-pointer flex justify-center bg-slate-300 hover:bg-slate-400 py-1 transition duration-200 ease-in-out">
              <span>Ver mas</span>
            </div>
          </Link>
          <button
            onClick={() => handleAddToCart(product)}
            type="button"
            class="mx-auto w-[70%]"
          >
            <div class="cursor-pointer flex justify-center bg-slate-900 text-white hover:bg-slate-950 py-1 space-x-1 transition duration-200 ease-in-out">
              <span class="my-auto text-xl">
                <IoCartOutline />
              </span>
              <span>Comprar</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
