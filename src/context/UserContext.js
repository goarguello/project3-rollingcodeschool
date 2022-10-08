import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../config/axiosConfig";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = async (values) => {
    try {
      const response = await axiosInstance.post("login", values);
      const data = response.data;
      setUser(data.user);
      setToken(data.token);
      setAuthenticated(true);
      localStorage.setItem("token", data.token);
      navigate("/admin");
    } catch (error) {
      console.log(error);
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      setUser(null);
      setToken(null);
      setAuthenticated(false);
      alert(`Error en la conexión. Motivo: ` + error.response.data.message);
    }
  };

  const getAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosInstance.defaults.headers.common["authorization"] = token;
    } else {
      delete axiosInstance.defaults.headers.common["authorization"];
    }
    try {
      const response = await axiosInstance.get("/users/auth");
      const data = response.data;     
      setUser(data);
      setAuthenticated(true);
    } catch (error) {
      setAuthenticated(false);
      setUser(null);
      setToken(null);
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      alert("Error. Motivo: Falla en la autenticación");
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setUser(null);
    setToken(null);
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
  };

  const register = async (values) => {
    try {
      const userNew = await axiosInstance.post("/users", values);
      if (userNew.status === 201) {
        window.alert(userNew.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        //GUARDAS LA LOGICA Y LOS ESTADOS QUE QUIERAS COMPARTIR
        user,
        setUser,
        login,
        authenticated,
        token,
        getAuth,
        logout,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
