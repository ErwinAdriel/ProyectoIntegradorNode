import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Cart({isOpen, onClose, cartItems, vacio, vaciarItems, eliminarItem, agregarItem}){

    return(
        <div class={`z-10 ${isOpen ? 'relative' : 'hidden'}`}>
          <div class="fixed inset-0 bg-gray-500/75 "></div>
            <div class="fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div class="w-screen max-w-md">
                <div class="flex h-full flex-col bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Carrito de compras</h2>
                      <div class="ml-3 flex h-7 items-center">
                        <button onClick={onClose} type="button" class="cursor-pointer relative -m-2 p-2 text-gray-400 hover:text-gray-500">                          
                          <IoMdClose />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        {cartItems.length === 0 ? (<p>El carrito esta vacio</p>) :
                          (
                              <ul class="-my-6 divide-y divide-gray-200">
                                {cartItems.map((item, index) => (
                                  <li key={index} class="flex py-6">
                                    <div style={{backgroundImage: `url(${item.img})`}} class="bg-cover bg-center bg-no-repeat size-30 rounded-md border border-gray-200">
                                    </div>

                                    <div class="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href="#">{item.name}</a>
                                          </h3>
                                          <p class="ml-4">$ {item.price}</p>
                                        </div>
                                      </div>
                                      <div class="flex flex-1 items-end justify-between text-sm">
                                        <p class="text-gray-500">Unidad: {item.cantidad}</p>
                                        <div class="flex">
                                          <button type="button" onClick={() => agregarItem(item)} class="cursor-pointer font-medium text-2xl text-green-500 hover:text-green-900"><IoAddCircleSharp /></button>
                                          <button type="button" onClick={() => eliminarItem(item)} class="cursor-pointer font-medium text-2xl text-red-500 hover:text-red-900"><MdDelete /></button>    
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
                    <div className={`${vacio ? 'hidden' : 'flex'} justify-between text-base font-medium text-gray-900`}>
                      <p>Total a pagar</p>
                      <p>$ 1000</p>
                    </div>
                    <div class={`mt-6 w-full justify-center space-x-6 ${vacio ? 'hidden' : 'flex'}`}>
                      <button onClick={() => vaciarItems(cartItems)} class="flex items-center cursor-pointer rounded-md border border-transparent bg-red-900 px-8 py-3 text-base font-medium text-white  hover:bg-red-500">Vaciar</button>
                      <button class="flex items-center cursor-pointer rounded-md border border-transparent bg-slate-900 px-8 py-3 text-base font-medium text-white hover:bg-slate-500">Comprar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}