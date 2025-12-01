import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import slide1 from "../assets/slider-1.jpg";
import slide2 from "../assets/slider-2.jpg";
import slide3 from "../assets/slider-3.jpg";
import slide4 from "../assets/slider-4.jpg";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";

export default function Banner(){

    const slides = [
        {url: slide1},
        {url: slide2},
        {url: slide3},
        {url: slide4},
    ];

    const [actualIndex, setActualIndex] = useState(0);

    const nextSlide = () => {
        const ultimoSlide = actualIndex === slides.length - 1;
        const newindex = ultimoSlide ? 0 : actualIndex + 1;
        setActualIndex(newindex);
    };

    const beforeSlide = () => {
        const primerSlide = actualIndex === 0;
        const newindex = primerSlide ? slides.length-1 : actualIndex - 1;
        setActualIndex(newindex);
    };

    const irASlide = (slideIndex) => {
        setActualIndex(slideIndex);
    };

    return(
        <div class="w-full xl:h-[400px] h-45 relative">
                <div class="xl:h-full w-full">
                    <div class="w-full xl:h-[400px] h-45">
                        <div class="bg-cover bg-center bg-no-repeat h-full w-full duration-500" style={{backgroundImage: `url(${slides[actualIndex].url})`}} >
                        </div>
                    </div>
                    <div class="absolute left-0 top-0 w-full h-full items-center justify-between flex">
                        <button onClick={beforeSlide} type="button" class="ml-4 text-5xl text-slate-900 border bg-white hover:border-slate-900 rounded-full hover:text-white hover:bg-slate-900 transition-all duration-300 ease-in-out cursor-pointer">< MdOutlineNavigateBefore/></button>
                        <button onClick={nextSlide} type="button" class="mr-4 text-5xl text-slate-900 border bg-white hover:border-slate-900 rounded-full hover:text-white hover:bg-slate-900 transition-all duration-300 ease-in-out cursor-pointer">< MdOutlineNavigateNext /></button>
                    </div>
                    <div class="justify-center flex absolute w-full text-white bottom-4">
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} onClick={() => irASlide(slideIndex)} class="cursor-pointer text-2xl">< RxDotFilled /></div>
                        ))}
                    </div>
                </div>
        </div>
    )
}