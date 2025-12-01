import { useContext } from "react";
import "./App.css";
import Home from "./layout/Home";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Error from "./layout/Error404";
import DetallesProductos from "./componentes/DetallesProductos";
import Nosotros from "./layout/Nosotros";
import Contacto from "./layout/Contacto";
import GaleriadeProductos from "./layout/GaleriadeProductos";
import Admin from "./layout/Admin";
import Login from "./layout/Login";
import RutaProtegida from "./auth/RutasProtegidas";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";

function App() {
  const { isAuthenticated } = useContext(CartContext);
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<GaleriadeProductos />} />
        <Route path="/productos/:id" element={<DetallesProductos />} />
        <Route
          path="/nosotros"
          element={
            <>
              <Nosotros />
            </>
          }
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="/admin"
          element={
            <RutaProtegida isAuthenticated={isAuthenticated}>
              <Admin />
            </RutaProtegida>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
