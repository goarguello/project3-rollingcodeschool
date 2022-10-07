import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import useMediaQuery from "../hooks/useMediaQuery";
import { useNavigate } from "react-router-dom";

const LoginMobile = () => {
  const { width } = useMediaQuery();
  const navigate = useNavigate();
  return width < 768 ? (
    <div className="principal-login d-flex align-items-center justify-content-center">
      <div className="container d-flex main-login flex-wrap align-items-center justify-content-center">
        <div className="principal-register d-flex justify-content-center align-items-center">
          <LoginForm />
        </div>
      </div>
    </div>
  ) : (
    navigate("/")
  );
};

export default LoginMobile;
