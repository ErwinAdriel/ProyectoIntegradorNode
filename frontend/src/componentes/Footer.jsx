import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Footer() {
  const { isAuthenticated } = useContext(CartContext);

  return (
    <footer class="bg-slate-900 text-white print:hidden">
      <div class={`${isAuthenticated ? 'hidden' : ''} pt-15 px-20`}>
        <div class="w-full flex flex-col items-center mb-[50px]">
          <div class="mb-[40px]">
            <span class="text-3xl font-bold">AvComputing</span>
          </div>
          <div class="w-full h-[1px] bg-[#E9E9E9]"></div>
        </div>
        <div class="lg:flex justify-between mb-[50px]">
          <div class="lg:w-[424px] ml-0 w-full mb-10 lg:mb-0">
            <h1 class="text-[18px] font-500 mb-5 font-bold">
              ATENCIÓN AL CLIENTE
            </h1>
            <p class="text-[14px] w-[247px] leading-[28px]">
              0810-555-8892 consultas@avcomputing.com.ar
            </p>
            <p class="text-[14px] w-[247px] leading-[28px] mt-4">
              WhatsApp +54 11 2165-6458 L a V de 8 a 18hs.
            </p>
          </div>
          <div class="flex-1 lg:flex">
            <div class="lg:w-1/3 w-full mb-10 lg:mb-0">
              <h1 class="text-[18px] font-500 mb-5 font-bold">NOSOTROS</h1>
              <div>
                <ul class="flex flex-col space-y-2 text-[14px]">
                  <li>Sobre nosotros</li>
                  <li>Sucursales</li>
                  <li>Venta corporativa</li>
                  <li>Preguntas frecuentes</li>
                </ul>
              </div>
            </div>
            <div class="lg:w-1/3 w-full mb-10 lg:mb-0">
              <h1 class="text-[18px] font-500 mb-5 font-bold">SERVICIO</h1>
              <div>
                <ul class="flex flex-col space-y-2 text-[14px]">
                  <li>Centro de ayuda</li>
                  <li>Términos y condiciones</li>
                  <li>Compra protegida</li>
                  <li>Boton de arrepentimiento</li>
                  <li>Defensa al consumidor</li>
                  <li>Reclamos</li>
                </ul>
              </div>
            </div>
            <div class="lg:w-1/3 w-full mb-10 lg:mb-0">
              <h1 class="text-[18px] font-500 mb-5 font-bold">SUCURSALES</h1>
              <p class="text-[14px] w-[247px] leading-[28px]">
                <span class="font-bold">Buenos Aires:</span> Lunes a Viernes de
                10 a 17h.
              </p>
              <p class="text-[14px] w-[247px] leading-[28px]">
                <span class="font-bold">Córdoba:</span> Lunes a Viernes de 10 a
                18h.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-black lg:h-20 sm:flex justify-between items-center px-20">
        <div class="sm:flex lg:space-x-5 justify-between items-center">
          <div class=" hidden sm:flex space-x-2 items-center">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
          <div>
            <span class="sm:text-base font-300">
              ©2025{" "}
              <a href="/" class="font-bold">
                AvComputing.
              </a>{" "}
              Todos los derechos reservados
            </span>
          </div>
        </div>
        <div class="flex space-x-2 text-4xl">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
        </div>
      </div>
    </footer>
  );
}
