import { useEffect, useState } from "react";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRouteAdmin = ({ children }) => {
  const { user, authenticated, getAuth, loading } = useContext(UserContext);
  const [flag, setFlag] = useState(false);
  const userLog = localStorage.getItem("token");

  useEffect(() => {
    if (userLog) {
      getAuth();
    }
    setFlag(true);
  }, []);

  if (loading) return <Spinner animation="border" />;
  return flag ? (
    authenticated && user.role === "ADMIN" ? (
      children
    ) : (
      <Navigate to="/home" />
    )
  ) : (
    <Spinner animation="border" />
  );
};

export default PrivateRouteAdmin;
