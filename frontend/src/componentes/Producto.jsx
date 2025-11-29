import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Producto({ product, addToCart }) {
  return (
    <div
      class="w-full h-full relative group overflow-hidden shadow-xl/10"
      key={product.id}
    >
      <Link to={`/productos/${product.id}`}>
        <div class="w-full h-[260px] mt-4 bg-cover bg-center bg-no-repeat">
          <img src={`${product.img}`} alt={product.name} />
        </div>
        <div class="flex justify-center h-[102px] items-center relative  border-t border-gray-300">
          <div>
            <p class="mb-2.5 text-base font-600 text-center text-gray-500  ">
              {product.name}
            </p>
            <div class="flex justify-center">
              <span class="flex font-medium text-gray-800 text-2xl text-center font-600">
                $ {product.price}
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div class="flex justify-center h-[5px] w-[50%] mx-auto items-center relative">
        <div class="absolute w-full border flex justify-center items-center top-5 group-hover:top-[-60px] transition-all duration-500 ease-in-out">
          <button
            onClick={() => addToCart(product)}
            type="button"
            class="bg-slate-900 w-[100%] flex items-center justify-center cursor-pointer"
          >
            <div class="flex text-white p-4 space-x-3 text-1xl">
              <span class="my-auto">
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
