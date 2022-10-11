import { useEffect, useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRouteAdmin = ({ children }) => {
  const { user, authenticated, getAuth, loading } = useContext(UserContext);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    getAuth();
    setFlag(true);
  }, []);

  if (loading) return "Cargando...";
  return flag ? (
    authenticated && user.role === "ADMIN" ? (
      children
    ) : (
      <Navigate to="/home" />
    )
  ) : (
    "Cargando..."
  );
};

export default PrivateRouteAdmin;
