import { useEffect } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { authenticated, getAuth } = useContext(UserContext);

  useEffect(() => {
    getAuth();
  }, []);

  console.log(authenticated);

  return authenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
