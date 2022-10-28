import { createContext, useState } from "react";
import axiosConfig from "../config/axiosConfig";
import { useNavigate } from "react-router-dom";
import { REGISTER_INITIAL_VALUES } from "../constants";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [flag, setFlag] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successRegister, setSuccessRegister] = useState({});
  const [error, setError] = useState({});
  const [value, setValue] = useState({});
  const navigate = useNavigate();

  const login = async (values) => {
    try {
      setLoading(true);
      const response = await axiosConfig.post("/login", values);
      const data = response.data;
      setUser(data.user);
      setToken(data.token);
      setAuthenticated(true);
      setLoading(false);
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (error) {
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      setUser(null);
      setToken(null);
      setAuthenticated(false);
      setError({ message: error.response.data.message });
    }
  };

  const getAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosConfig.defaults.headers.common["authorization"] = token;
    } else {
      delete axiosConfig.defaults.headers.common["authorization"];
    }
    try {
      setLoading(true);
      const response = await axiosConfig.get("/users/auth");
      const data = response.data;
      setUser(data);
      setAuthenticated(true);
      setLoading(false);
    } catch (error) {
      setAuthenticated(false);
      setUser(null);
      setToken(null);
      setLoading(false);
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      console.log("Error. Motivo: Falla en la autenticación");
      navigate("/");
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setUser(null);
    setToken(null);
    setLoading(false);
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    navigate("/");
  };

  const register = async (values) => {
    try {
      const userNew = await axiosConfig.post("/users", values);
      if (userNew.status === 201) {
        setSuccessRegister({
          message:
            "Usuario creado, deberá ser habilitado por un Administrador para acceder.  \n Será redirigido al inicio.",
        });
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    } catch (error) {
      setError({ message: error.response.data.errors[0].msg });
    }
  };

  const registerTwo = async (values) => {
    try {
      const userNew = await axiosConfig.post("/users", values);
      if (userNew.status === 201) {
        getUsers()
        setCloseModal(true);
      }
    } catch (error) {
      setError({ message: error.response.data.errors[0].msg });
    }
  };

  const getUsers = async () => {
    try {
      const response = await axiosConfig.get("/users/");
      setUsers(response.data.users);
    } catch (error) {
      alert("No hay Usuarios");
    }
  };

  const getSingleUser = async (id) => {
    try {
      const response = await axiosConfig.get(`/users/${id}`);
      setValue(response.data);
      setFlag(true);
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (val, id) => {
    try {
      const response = await axiosConfig.put(`/users/${id}`, {
        adress: val.adress,
        courseInCharge: val.courseInCharge,
        email: val.email,
        name: val.name,
        phone: val.phone,
      });
      getUsers();
      setCloseModal(true);
    } catch (error) {
      setError({ message: error.response.data.errors[0].msg });
    }
  };

  const deleteUser = async (id) => {
    try {
      if (user._id === id) {
        setError({ message: "No puedes Eliminarte a ti mismo" });
      } else {
        if (window.confirm("¿Estas seguro de eliminar el usuario?")) {
          await axiosConfig.delete(`/users/${id}`);
        }
        getUsers();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        //GUARDAS LA LOGICA Y LOS ESTADOS QUE QUIERAS COMPARTIR
        flag,
        setFlag,
        closeModal,
        setCloseModal,
        user,
        setUser,
        login,
        authenticated,
        token,
        getAuth,
        logout,
        register,
        registerTwo,
        loading,
        successRegister,
        setSuccessRegister,
        error,
        setError,
        editUser,
        getSingleUser,
        value,
        getUsers,
        users,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
