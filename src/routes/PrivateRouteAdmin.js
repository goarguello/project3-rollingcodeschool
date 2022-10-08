import { useEffect } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { authenticated, getAuth, user } = useContext(UserContext);

  useEffect(() => {
    getAuth();
  }, []);

  console.log(user);

  return authenticated && user.role === "ADMIN" ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
