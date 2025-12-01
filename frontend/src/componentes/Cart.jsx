import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { IoMdClose, IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { CartContext } from "../context/CartContext";

export default function Cart({ isOpen, onClose }) {
  const { cart, vaciarCart, eliminarCant, vacio, agregarCant, eliminarProd, total, comprarCart } =
    useContext(CartContext);
  return (
    <div class={`z-10 ${isOpen ? "relative" : "hidden"}`}>
      <div class="fixed inset-0 bg-gray-500/75 "></div>
      <div class="fixed inset-y-0 right-0 flex">
        <div class="w-screen max-w-md">
          <div class="flex h-full flex-col bg-white shadow-xl">
            <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div class="flex items-start justify-between">
                <h2
                  class="text-lg font-medium text-gray-900"
                  id="slide-over-title"
                >
                  Carrito de compras
                </h2>
                <div class="ml-3 flex h-7 items-center">
                  <button
                    onClick={onClose}
                    type="button"
                    class="cursor-pointer relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <IoMdClose />
                  </button>
                </div>
              </div>
              <div class="mt-8">
                <div class="flow-root">
                  {cart.length === 0 ? (
                    <p>El carrito esta vacio</p>
                  ) : (
                    <ul class="-my-6 divide-y divide-gray-200">
                      {cart.map((item, index) => (
                        <li key={index} class="flex py-6">
                          <div
                            style={{ backgroundImage: `url(${item.img})` }}
                            class="bg-cover bg-center bg-no-repeat size-30 rounded-md border border-gray-200"
                          ></div>

                          <div class="ml-4 flex flex-1 flex-col">
                            <div>
                              <div class="flex justify-between text-base font-medium space-x-1 text-gray-900">
                                <h3>
                                  {item.name}
                                </h3>
                                <p class="flex space-x-1">
                                  <span>$</span><span>{item.price * (item.cantidad || 1)}</span>
                                </p>
                              </div>
                            </div>
                            <div class="flex flex-1 text-xl items-end justify-between">
                              <div class="flex text-gray-800 items-center space-x-3">
                                <button
                                  onClick={() => eliminarCant(item.id)}
                                  class="cursor-pointer hover:text-black"
                                >
                                  <GrFormSubtract />
                                </button>
                                <span class="text-gray-400">
                                  {item.cantidad}
                                </span>
                                <button
                                  onClick={() => agregarCant(item.id)}
                                  class="cursor-pointer hover:text-black"
                                >
                                  <IoMdAdd />
                                </button>
                              </div>
                              <div class="flex">
                                <button
                                  type="button"
                                  onClick={() => eliminarProd(item.id)}
                                  class="cursor-pointer font-medium text-red-500 hover:text-red-900"
                                >
                                  <MdDelete />
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div class="border-t border-gray-400 px-4 py-6 sm:px-6">
              <div
                className={`${
                  vacio ? "hidden" : "flex"
                } justify-between text-base font-medium text-gray-900`}
              >
                <p>Total a pagar</p>
                <p>$ {total}</p>
              </div>
              <div
                class={`mt-6 w-full justify-center space-x-6 ${
                  vacio ? "hidden" : "flex"
                }`}
              >
                <button
                  onClick={() => vaciarCart(cart)}
                  class="flex items-center cursor-pointer rounded-md border border-transparent bg-red-900 px-8 py-3 text-base font-medium text-white  hover:bg-red-500"
                >
                  Vaciar
                </button>
                <button
                onClick={()=> comprarCart()} class="flex items-center cursor-pointer rounded-md border border-transparent bg-slate-900 px-8 py-3 text-base font-medium text-white hover:bg-slate-500">
                  Finalizar compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
