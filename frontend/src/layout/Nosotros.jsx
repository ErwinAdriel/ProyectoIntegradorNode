import React from "react";
import { Link } from "react-router-dom";
import nosotros from "../assets/nosotros.jpg";

export default function Nosotros(){
    return(
        <div class='w-full pt-5 pb-5'>
            <div class='w-full'>
                <div class='mx-auto flex justify-center'>
                    <h1 class='text-4xl font-semibold text-gray-900 sm:text-5xl'>Sobre nosotros</h1>
                </div>
                <div class='w-full'>
                    <div class='w-full px-20 min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0'>
                        <div class='w-full md:w-[410px] md:h-[600px] h-auto overflow-hidden shadow-xl/30'>
                            <img src={nosotros} alt="about" class='w-full h' />
                        </div>
                        <div class='flex-1 text-justify'>
                            <h1 class='text-2xl font-medium text-black'>Que es AvComputing?</h1>
                            <p class='leading-7 mb-2.5 text-[15px] text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.</p>
                            <div class='mt-10'>
                                <Link to='/contacto' class="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contacto</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}