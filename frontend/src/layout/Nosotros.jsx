import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nosotros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class="w-full pt-41 pb-5 px-5 sm:px-20">
      <title>Nosotros | AvComputing</title>
      <div class="w-full lg:flex lg:space-x-[30px]">
        <div class="lg:w-1/4 mb-8 w-full">
          <ul class="text-md text-slate-600 space-y-2">
            <li class="text-slate-950 font-bold border-b-2 border-slate-900 py-1"><span class="cursor-pointer">Quiénes somos</span></li>
            <li class="text-slate-950 hover:font-bold hover:border-b-2 hover:border-slate-900 py-1"><span class="cursor-pointer">Servicio tecnico especializado</span></li>
            <li class="text-slate-950 hover:font-bold hover:border-b-2 hover:border-slate-900 py-1"><span class="cursor-pointer">Términos y condiciones</span></li>
            <li class="text-slate-950 hover:font-bold hover:border-b-2 hover:border-slate-900 py-1"><span class="cursor-pointer">Garantía y devoluciones</span></li>
            <li class="text-slate-950 hover:font-bold hover:border-b-2 hover:border-slate-900 py-1"><span class="cursor-pointer">Recibí o retirá tu compra</span></li>
            <li class="text-slate-950 hover:font-bold hover:border-b-2 hover:border-slate-900 py-1"><span class="cursor-pointer">Contactanos</span></li>
          </ul>
        </div>
        <div class="flex-1 text-justify">
          <h1 class="text-3xl font-medium text-slate-900">Somos AvComputing</h1>
          <p class="leading-7 text-[15px] text-slate-600 my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries but also the on leap into electronic
            typesetting.
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries but also the on leap into electronic
            typesetting.
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries but also the on leap into electronic
            typesetting.
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries but also the on leap into electronic
            typesetting.
          </p>
          <div class="mt-10">
            <Link
              to="/contacto"
              class="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
