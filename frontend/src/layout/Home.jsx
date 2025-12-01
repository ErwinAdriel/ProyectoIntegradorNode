import { useContext, useEffect } from "react";
import ProductList from "../componentes/ProductList";
import Banner from "../componentes/Banner";
import Categorias from "../componentes/Categorias";
import { CartContext } from "../context/CartContext";
import loading from "../img/loading.gif";

export default function Home() {
  const { carga } = useContext(CartContext);

  useEffect(()=>{
      window.scrollTo(0, 0);
    }, []);

  return (
    <div class="pt-34">
      <Banner />
      <Categorias />
      {carga ? (
        <img class="mx-auto" src={loading} alt="loading" />
      ) : (
        <div>
          <ProductList />
        </div>
      )}
    </div>
  );
}
