import React from "react";
import { useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Error from "../layout/Error404";

export default function DetallesProductos({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((producto) => producto.id == id);
  console.log(product);

  return (
    <>
      {product ? (
        <div className="w-full lg:flex justify-between py-5 lg:px-20">
          <div className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px]">
            <div className="w-full">
              <div className="w-full h-[600px] border border-gray-300 flex justify-center items-center overflow-hidden relative mb-3">
                <img src={`${product.img}`} alt={product.name} />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full mt-10 lg:mt-0">
              <span className="text-xs font-normal uppercase mb-2 inline-block">
                Categoria
              </span>
              <p className="text-2xl font-medium text-black mb-4">
                {product.name}
              </p>
              <div className="mb-7 mt-10">
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
              <button onClick={() => addToCart(product)} className="mt-10 border w-full h-[50px] cursor-pointer">
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
    </>
  );
}
