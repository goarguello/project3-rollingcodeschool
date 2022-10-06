import React from "react";
import "./LandingPage.css";
import logo from "../../assets/img/Rolling-School-Logo.png"
import LoginForm from "../LoginForm/LoginForm";

const LandingPage = () => {
  return (
    <div>
      <div className="container d-flex flex-wrap main">
        <div className="principal-container d-flex justify-content-center align-items-center">
          <div className="bg-image hover-zoom">
            <img
              src={logo}
              alt="Logo"
              className="w-100"
            />
          </div>
        </div>
        <div className="d-flex flex-column secondary-container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
