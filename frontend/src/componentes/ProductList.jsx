import { useContext, useState } from "react";
import Producto from "./Producto";
import { CartContext } from "../context/CartContext";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function ProductList() {
  const { productosFiltrados } = useContext(CartContext);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const indexOfLast = currentPage * itemsPerPage;
  const indexOffFirst = indexOfLast - itemsPerPage;
  const currentProducts = productosFiltrados.slice(indexOffFirst, indexOfLast);

  const totalPages = Math.ceil(productosFiltrados.length / itemsPerPage);
  return (
    <>
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-5 sm:px-20 mb-20 mt-10">
        {currentProducts.map((product) => (
          <Producto key={product.id} product={product} />
        ))}
      </div>
      {/*Pagination*/}

      <div class="mb-10 flex space-x-3 w-full mx-auto justify-center text-2xl">
        <a
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          class={`${(currentPage===1) ? "cursor-not-allowed" : "cursor-pointer hover:bg-slate-900 hover:text-white duration-300 ease-in-out"} bg-gray-300 text-gray-600 h-10 w-10 rounded-full flex items-center justify-center`}
        >
          <GrFormPrevious />
        </a>
        {Array.from({ length: totalPages }, (_, i) => (
          <a
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            class={`${((i+1) === currentPage) ? "bg-slate-900 text-white" : ""} duration-300 ease-in-out cursor-pointer bg-gray-300 text-gray-600 text-xl h-10 w-10 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white`}
          >
            <span>{i + 1}</span>
          </a>
        ))}
        <a
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          class={`${(currentPage === totalPages) ? "cursor-not-allowed" : "cursor-pointer hover:bg-slate-900 hover:text-white duration-300 ease-in-out"} bg-gray-300 text-gray-600 h-10 w-10 rounded-full flex items-center justify-center`}
        >
          <GrFormNext />
        </a>
      </div>
    </>
  );
}
