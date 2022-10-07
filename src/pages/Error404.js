import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  const home = () => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  };

  useEffect(() => {
    home();
  }, []);
  return <div>Error, será redirigido a la pagina inicial en 10 segundos</div>;
};

export default Error404;
