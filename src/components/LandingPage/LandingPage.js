import React from "react";
import "./LandingPage.css";
import logo from "../../assets/img/Rolling-School-Logo.png";
import LoginForm from "../LoginForm/LoginForm";
import useMediaQuery from "../../hooks/useMediaQuery";

const LandingPage = () => {
  const { width } = useMediaQuery();
  return (
    <div className="principal d-flex align-items-center justify-content-center">
      <div className="container d-flex main flex-wrap align-items-center justify-content-center">
        <div className="principal-container d-flex justify-content-center align-items-center">
          {width < 768 ? (
            <div className="bg-image div-logo">
              <img src={logo} alt="Logo" className="w-100" />
            </div>
          ) : (
            <div className="bg-image div-logo hover-zoom">
              <img src={logo} alt="Logo" className="w-100" />
            </div>
          )}
        </div>
        <div className="d-flex flex-column secondary-container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
