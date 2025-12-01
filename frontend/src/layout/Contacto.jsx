import { useEffect } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import { IoIosSend } from "react-icons/io";

export default function Contacto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class="bg-white mb-10 py-5 px-5 lg:px-20 pt-38 ">
      <title>Contacto | AvComputing</title>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-semibold text-gray-900 sm:text-5xl">
          Contacto
        </h2>
      </div>
      <div class="w-full mt-8 lg:flex lg:space-x-[30px]">
        <div class="lg:w-1/2 w-full mb-8">
          <div class="md:flex md:space-x-[30px] mb-[30px]">
            <div class="cursor-pointer md:w-1/2 w-full h-[196px] flex flex-col justify-center bg-slate-200 text-black p-5 ">
              <div class="flex justify-center mb-3">
                <FaPhoneVolume class="text-2xl" />
              </div>
              <p class="text-center text-2xl">Telefono</p>
              <p class="text-center text-base">+(549) 11 2165 6458</p>
              <p class="text-center text-base">+(549) 11 4960 7280</p>
            </div>
            <div class="cursor-pointer md:w-1/2 w-full h-[196px] flex flex-col justify-center bg-slate-200 text-black mt-8 md:mt-0">
              <div class="flex justify-center mb-3">
                <IoMdMail class="text-2xl" />
              </div>
              <p class="text-center text-2xl">Email</p>
              <p class="text-center text-base">adrielquispe87@gmail.com</p>
            </div>
          </div>
          <div class="cursor-pointer p-5 flex w-full bg-slate-200 text-black ">
            <div class="flex space-x-5">
              <SiGooglemaps class="text-2xl" />
              <div>
                <p class="text-2xl">Dirección</p>
                <p class="text-base">
                  1416 Colombres, Buenos Aires, Argentina.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 bg-slate-900 text-white sm:p-10 p-3">
          <div class="flex items-center">
            <p class="text-2xl font-semibold">Completar formulario</p>
          </div>
          <form method="POST" class="mt-5">
            <div class="mb-4">
              <div class="w-full h-full">
                <label>Nombre*</label>
                <div class="border border-gray-400">
                  <input
                    type="text"
                    class="px-6 bg-white text-gray-400 font-normal text-sm w-full h-[50px] focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div class="mb-4">
              <div class="w-full h-full">
                <label>Email*</label>
                <div class="border border-gray-400">
                  <input
                    type="text"
                    class="px-6 bg-white text-gray-400 font-normal text-sm w-full h-[50px] focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div class="mb-4">
              <div class="w-full h-full">
                <label>Asunto*</label>
                <div class="border border-gray-400">
                  <input
                    type="text"
                    class="px-6 bg-white text-gray-400 font-normal text-sm w-full h-[50px] focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div class="mb-5">
              <label>Mensaje*</label>
              <textarea
                name="mensaje"
                id="msg"
                class="w-full h-[105px] focus:outline-none border bg-white border-gray-400 p-6 text-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              class="cursor-pointer bg-slate-200 text-slate-950 text-md font-bold px-8 py-2"
            >
              <div class="flex justify-center">
                <span class="my-auto text-xl">
                  <IoIosSend />
                </span>
                <span>Enviar</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
