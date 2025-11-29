import React from "react";
import ProductList from "../componentes/ProductList";
import loading from "../img/loading.gif";

export default function GaleriadeProductos({products, cargando}){
    return(
        <>
            {
                cargando ? <img class="mx-auto" src={loading} alt="loading" /> :
                <div>
                    <ProductList products={products}/>
                </div>
            }
        </>
    )
}