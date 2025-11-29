import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { IoMdExit } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";

export default function Nav({
  cartItems,
  vacio,
  vaciarItems,
  eliminarItem,
  agregarItem,
}) {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, setIsAuth } = useContext(CartContext);
  const [isCartOpen, setCartOpen] = useState(false);

  const Menu = [
    { id: 1, name: "Productos", link: "/productos" },
    { id: 2, name: "Nosotros", link: "/nosotros" },
    { id: 3, name: "Contacto", link: "/contacto" },
  ];
  return (
    <div>
      <div
        class={`w-full h-[86px] ${
          isAuthenticated ? "bg-slate-900 text-white" : "bg-white text-black"
        } lg:block md:px-20 px-5`}
      >
        <div class="container-x mx-auto h-full">
          <div class="relative h-full">
            <div class="flex justify-between items-center h-full">
              <Link to={`${isAuthenticated ? "/admin" : "/"}`}>
                <div class="text-3xl font-bold">
                  <span>AvComputing</span>
                </div>
              </Link>
              <div
                class={`${
                  isAuthenticated ? "hidden" : "md:flex hidden"
                } w-[517px] h-[44px] border border-slate-400`}
              >
                <div class="w-full h-full flex items-center bg-white">
                  <form action="#" class="h-full w-full">
                    <input
                      type="text"
                      class="search-input h-full w-full px-4 focus:outline-none"
                      placeholder="Buscar producto..."
                    />
                  </form>
                </div>
                <div class="border-2 border-black px-3 flex items-center bg-slate-900 text-white">
                  <button>Buscar</button>
                </div>
              </div>
              {isAuthenticated ? (
                <div class="flex space-x-3 items-center">
                  <div class="flex text-2xl">
                    <span>
                      <FaRegUser />
                    </span>
                  </div>
                  <Link to={"/login"}>
                    <div class="flex text-3xl">
                      <button class="cursor-pointer" onClick={()=>setIsAuth(false)}>
                        <span>
                          <IoMdExit  />
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
              ) : (
                <div class="flex space-x-3 items-center">
                  <div class="md:flex text-3xl hidden">
                    <span>
                      <MdFavoriteBorder />
                    </span>
                  </div>
                  <div class="flex text-3xl">
                    <button
                      class="relative cursor-pointer"
                      type="button"
                      onClick={() => setCartOpen(!isCartOpen)}
                    >
                      <span>
                        <IoCartOutline />
                      </span>
                      <span class="w-[18px] h-[18px] rounded-full absolute -top-2 -right-2 flex justify-center items-center text-[9px] bg-blue-700 text-white">
                        0
                      </span>
                    </button>
                    <Cart
                      cartItems={cartItems}
                      vacio={vacio}
                      vaciarItems={vaciarItems}
                      eliminarItem={eliminarItem}
                      agregarItem={agregarItem}
                      isOpen={isCartOpen}
                      onClose={() => setCartOpen(false)}
                    />
                  </div>
                  <Link to={"/login"}>
                    <div class="flex text-2xl">
                      <span>
                        <FaRegUser />
                      </span>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isAuthenticated ? (
        ""
      ) : (
        <div class="bg-slate-900 w-full font-medium relative md:block text-white px-5 sm:px-20">
          <ul class="sm:flex">
            <div class="text-white w-15 h-15 text-3xl sm:hidden">
              {open == true ? (
                <button
                  onClick={() => setOpen(false)}
                  class="w-full h-full cursor-pointer"
                >
                  <IoClose class="text-4xl" />
                </button>
              ) : (
                <button
                  onClick={() => setOpen(true)}
                  class="w-full h-full cursor-pointer"
                >
                  <CiMenuBurger class="text-4xl" />
                </button>
              )}
            </div>
            {Menu.map((menu) => (
              <li
                key={menu.id}
                class="hidden sm:flex duration-300 ease-in-out hover:text-black hover:bg-white"
              >
                <Link to={menu.link}>
                  <div class="px-3 py-4 cursor-pointer">{menu.name}</div>
                </Link>
              </li>
            ))}
            {open == false
              ? ""
              : Menu.map((menu) => (
                  <li
                    key={menu.id}
                    class="sm:hidden duration-100 hover:text-black hover:bg-white"
                  >
                    <Link to={menu.link}>
                      <div class="px-3 py-4 cursor-pointer">{menu.name}</div>
                    </Link>
                  </li>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
}
