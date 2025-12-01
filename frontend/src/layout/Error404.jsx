import { Link } from "react-router-dom"
import { useEffect } from "react";

export default function Error(){
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, []);

  return(
    <div class=" bg-white px-6 py-24 pt-38">
      <title>Error 404 | AvComputing</title>
      <div class="text-center">
        <p class="font-semibold text-8xl text-slate-900">404</p>
        <h1 class="mt-4 text-5xl font-semibold tracing-tight text-balance text-gray-900 sm:text-5xl">Página no encontrada</h1>
        <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/4">Lo sentimos, no pudimos encontrar la página.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link to='/' class="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Volver</Link>
          <Link to='/contacto' class="text-sm font-semibold text-gray-900">Contacto soporte <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </div>
    </div>
  )
}