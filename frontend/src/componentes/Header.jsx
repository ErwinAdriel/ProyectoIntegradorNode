import { useState } from "react";
import Nav from "../componentes/Nav";

export default function Header({cartItems, vacio, vaciarItems, eliminarItem, agregarItem}){
    return(
        <header class="relative">
            <Nav cartItems={cartItems} vacio={vacio} vaciarItems={vaciarItems} eliminarItem={eliminarItem} agregarItem={agregarItem} />
        </header>
    );
}