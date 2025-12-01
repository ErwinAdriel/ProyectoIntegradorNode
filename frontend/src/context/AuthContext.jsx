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
      const res = await fetch("data/users.json");
      const users = await res.json();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        setErrors({ email: "credenciales inválidas" });
        console.log(errors);
      } else {
        console.log(foundUser.role);

        if (foundUser.role === "admin") {
          setIsAuth(true);
          localStorage.setItem("isAuth", true);
          localStorage.setItem("role", foundUser.role);
          setRole(foundUser.role);
          navigate("/admin");
        }
        if (foundUser.role === "client") {
          setIsAuth(true);
          localStorage.setItem("isAuth", true);
          localStorage.setItem("role", foundUser.role);
          setRole(foundUser.role);
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
      setErrors({ email: "Algo salio mal. Por favor, intentelo mas tarde" });
    }
  };

  const logoutSession = (e) => {
    e.preventDefault();
    setIsAuth(false);
    localStorage.removeItem("isAuth");
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
