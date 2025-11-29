import React, { useEffect, useState } from "react";
import Producto from "./Producto";

export default function ProductList({products, addToCart}){
    return(
        <>        
            <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-20 mb-20 mt-10">
                {
                    products.map((product) => (
                        <Producto key={product.id} product={product} addToCart={addToCart}/>
                    ))
                }
            </div>
        </>
    )
}