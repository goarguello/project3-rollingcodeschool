import React, { useContext, useEffect, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../../config/axiosConfig";
import "./LoginForm.css";
import useForm from "../../hooks/useForm";
import { LOGIN_INITIAL_VALUES } from "../../constants";
import { validationLogin } from "../../helpers/validations";
import { UserContext } from "../../context/UserContext";

const LoginForm = () => {
  const { login, error, setError, flag, setFlag } = useContext(UserContext);
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, errors } = useForm(
    LOGIN_INITIAL_VALUES,
    login,
    validationLogin
  );

  useEffect(() => {
    setTimeout(() => {
      setError({});
    }, 5000);
  }, [flag]);

  return (
    <MDBContainer fluid className="box-login">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
              setFlag(!flag);
            }}
          >
            <MDBCard
              className=" text-white my-5 mx-auto"
              style={{
                backgroundColor: "rgba(137, 137, 137, 0.6)",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                borderRadius: "1rem",
                maxWidth: "400px",
              }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100 box">
                <h2 className="fw-bold mb-3 text-uppercase">Login</h2>
                <p className="text-white-50 mb-3">
                  Por favor, ingresa tu correo electrónico y contraseña.
                </p>

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  wrapperStyle={{}}
                  label="Correo electrónico"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  id="formControlEmail"
                  type="email"
                  size="lg"
                  required
                />
                <MDBInput
                  wrapperClass="mb-2 mx-5 w-100"
                  labelClass="text-white"
                  label="Contraseña"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  id="formControlPassword"
                  type="password"
                  size="lg"
                  required
                />

                <p className="small my-0 pb-lg-2">
                  <a className="text-white-50" href="/404">
                    ¿Olvidaste tu contraseña?
                  </a>
                </p>
                <MDBBtn
                  type="submit"
                  className="mx-2 mb-2 px-5 my-2 button"
                  size="lg"
                >
                  Entrar
                </MDBBtn>

                {Object.keys(error).length != 0
                  ? Object.values(error).map((error, i) => (
                      <Alert key={i} variant="danger">
                        {error}
                      </Alert>
                    ))
                  : null}

                <div>
                  <p className="mb-0">
                    ¿No tienes usuario?
                    <a href="/register" className="mx-1 text-white-50 ">
                      Registrate
                    </a>
                  </p>
                </div>
                {Object.keys(errors).length != 0
                  ? Object.values(errors).map((error) => (
                      <Alert variant="danger">{error}</Alert>
                    ))
                  : null}
              </MDBCardBody>
            </MDBCard>
          </Form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginForm;
