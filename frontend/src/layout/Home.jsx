import React from "react";
import ProductList from "../componentes/ProductList";
import Banner from "../componentes/Banner";
import Categorias from "../componentes/Categorias"
import loading from "../img/loading.gif";

export default function Home({products, cargando, handleAddToCart}){
    
    return(
        <>
            <Banner />
            <Categorias />
            {
                cargando ? <img class="mx-auto" src={loading} alt="loading" /> :
                <div>
                    <ProductList products={products} addToCart={handleAddToCart}/>
                </div>
            }
        </>
    )
}