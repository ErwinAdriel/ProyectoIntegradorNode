import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { setIsAuth } = useContext(CartContext);
  const [role, setRole] = useState("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuth") === "true";
    const userRole = localStorage.getItem("role") || "";
    if (isAuthenticated && userRole === "admin") {
      setIsAuth(true);
      setRole(userRole);
      navigate("/admin");
    } else if (isAuthenticated && userRole === "client") {
      setIsAuth(true);
      setRole(userRole);
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!email) validationErrors.email = "email requerido";
    if (!password) validationErrors.password = "password requerida";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {

      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });

      if(res.ok){
        const data = await res.json();
        const token = data.token;
        const userRole = data.user.role;
        localStorage.setItem("token", token);
        localStorage.setItem("role", userRole);
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        setRole(userRole);
        navigate(userRole === "admin" ? "/admin" : "/");
      } else{
        const errorData = await res.json();
        setErrors({email: errorData.message || "credenciales inválidas"});
      }
    } catch (err) {
      console.log(err);
      setErrors({ email: "Algo salio mal. Por favor, intentelo mas tarde" });
    }
  };

  const logoutSession = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/auth/logout/${token}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          console.log("Cierre de sesión exitoso");
        } else {
          console.log("Error al cerrar sesión");
        } })
      .catch((err) => {
        console.log("Error de red al cerrar sesión", err);
      });
    setIsAuth(false);
    localStorage.removeItem("isAuth");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("idSession");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        errors,
        handleSubmit,
        logoutSession,
        role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
