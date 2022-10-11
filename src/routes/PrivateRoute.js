import { useEffect, useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { authenticated, getAuth, loading } = useContext(UserContext);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    getAuth();
    setFlag(true);
  }, []);

  // console.log(authenticated);

  if (loading) return "Cargando...";

  return flag ? authenticated ? children : <Navigate to="/" /> : "Cargando...";
};

export default PrivateRoute;
