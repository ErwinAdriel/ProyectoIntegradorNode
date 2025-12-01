import { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logoshop.png";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, cart, busqueda, setBusqueda } =
    useContext(CartContext);
  const { logoutSession, role } = useContext(AuthContext);
  const [isCartOpen, setCartOpen] = useState(false);
  const totalCantidad = cart.reduce(
    (acc, product) => acc + (product.cantidad || 1),
    0
  );

  const Menu = [
    { id: 1, name: "Productos", link: "/productos" },
    { id: 2, name: "Nosotros", link: "/nosotros" },
    { id: 3, name: "Contacto", link: "/contacto" },
  ];
  return (
    <div>
      {isAuthenticated && role === "admin" ? (
        <div class="bg-slate-900 text-white w-full h-[86px] lg:block md:px-20 px-5">
          <div class="container-x mx-auto h-full">
            <div class="relative h-full">
              <div class="flex justify-between items-center h-full">
                <Link to={"/admin"}>
                  <div class="text-3xl font-bold flex space-x-2">
                    <img class="w-10" src={logo} alt="logo" />
                    <span>DASHBOARD</span>
                  </div>
                </Link>
                <div class="flex space-x-3 items-center">
                  <div class="flex text-2xl">
                    <span>
                      <FaRegUser />
                    </span>
                  </div>
                  <div class="flex text-3xl">
                    <button class="cursor-pointer" onClick={logoutSession}>
                      <span>
                        <IoMdExit />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="bg-white text-slate-900 w-full h-20 lg:block md:px-20 px-5">
          <div class="container-x mx-auto h-full">
            <div class="relative h-full">
              <div class="flex justify-between space-x-5 items-center h-full">
                <Link to={"/"}>
                  <div class="text-3xl font-bold flex space-x-2">
                    <img class="w-15 sm:w-10" src={logo} alt="logo" />
                    <span class="hidden lg:flex">AvComputing</span>
                  </div>
                </Link>
                <div class="flex  w-[500px] border border-slate-400">
                  <div class="w-full h-full flex items-center bg-white">
                    <form class="h-full w-full">
                      <div class="flex">
                        <input
                          type="text"
                          class=" placeholder:text-gray-400 h-full w-full px-4 py-2 focus:outline-none"
                          placeholder="Buscar productos..."
                          value={busqueda}
                          onChange={(e) => setBusqueda(e.target.value)}
                        />
                        
                      </div>
                    </form>
                  </div>
                </div>
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
                      {totalCantidad > 0 ? (
                        <span class="w-[18px] h-[18px] rounded-full absolute -top-2 -right-2 flex justify-center items-center text-[9px] bg-blue-700 text-white">
                          {`${totalCantidad}`}
                        </span>
                      ) : (
                        ""
                      )}
                    </button>
                    <Cart
                      isOpen={isCartOpen}
                      onClose={() => setCartOpen(false)}
                    />
                  </div>
                  {isAuthenticated ? (
                    <>
                      <div class="flex text-2xl">
                        <span>
                          <FaRegUser />
                        </span>
                      </div>
                      <div class="flex text-3xl">
                        <button class="cursor-pointer" onClick={logoutSession}>
                          <span>
                            <IoMdExit />
                          </span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <Link to={"/login"}>
                      <div class="flex text-2xl">
                        <span>
                          <FaRegUser />
                        </span>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAuthenticated && role === "admin" ? (
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
                <NavLink
                  to={menu.link}
                  className={({ isActive }) =>
                    isActive ? "text-black bg-white" : ""
                  }
                >
                  <div class="px-3 py-4 cursor-pointer">{menu.name}</div>
                </NavLink>
              </li>
            ))}
            {open == false
              ? ""
              : Menu.map((menu) => (
                  <li
                    key={menu.id}
                    class="sm:hidden duration-100 hover:text-black hover:bg-white"
                  >
                    <NavLink
                      to={menu.link}
                      className={({ isActive }) =>
                        isActive ? "text-red-600" : ""
                      }
                    >
                      <div class="px-3 py-4 cursor-pointer">{menu.name}</div>
                    </NavLink>
                  </li>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
}
