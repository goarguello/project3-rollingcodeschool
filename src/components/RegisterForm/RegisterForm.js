import React, { useEffect, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { REGISTER_INITIAL_VALUES } from "../../constants";
import { validationRegisterMain } from "../../helpers/validations";
import useForm from "../../hooks/useForm";
import "./RegisterForm.css";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { register, successRegister, setSuccessRegister, error ,setError,flag, setFlag } =
    useContext(UserContext);
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, errors } = useForm(
    REGISTER_INITIAL_VALUES,
    register,
    validationRegisterMain
  );

  const goToHome = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccessRegister({});
      setError({})
      // goToHome();
    }, 5000);
  }, [flag]);

  return (
    <div className="principal d-flex align-items-center justify-content-center">
      <div className="container d-flex main flex-wrap align-items-center justify-content-center">
        <div className="principal-register d-flex justify-content-center align-items-center">
          <MDBContainer fluid>
            <MDBRow className="d-flex justify-content-center align-items-center h-100 ">
              <MDBCol col="12">
                <Form
                  onSubmit={(e) => {
                    handleSubmit(e);
                    setFlag(!flag);
                  }}
                >
                  <MDBCard
                    className=" text-white my-5 mx-auto register-form "
                    style={{
                      backgroundColor: "rgba(137, 137, 137, 0.6)",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                      borderRadius: "1rem",
                      maxWidth: "400px",
                    }}
                  >
                    <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                      <h2 className="fw-bold mb-3 text-uppercase">Registro</h2>

                      <MDBInput
                        wrapperClass="mb-4 mx-5 w-100"
                        labelClass="text-white"
                        wrapperStyle={{}}
                        label="Nombre completo"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        id="formControlName"
                        type="text"
                        size="lg"
                        minLength={3}
                        maxLength={25}
                        required
                      />
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
                        minLength={1}
                        maxLength={50}
                        required
                      />
                      <MDBInput
                        wrapperClass="mb-4 mx-5 w-100"
                        labelClass="text-white"
                        wrapperStyle={{}}
                        label="Número telefónico"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        id="formControlPhone"
                        type="number"
                        size="lg"
                        maxLength={10}
                        required
                      />
                      <MDBInput
                        wrapperClass="mb-4 mx-5 w-100"
                        labelClass="text-white"
                        wrapperStyle={{}}
                        label="Dirección"
                        name="adress"
                        value={values.adress}
                        onChange={handleChange}
                        id="formControlAdress"
                        type="text"
                        size="lg"
                        minLength={5}
                        maxLength={25}
                        required
                      />
                      {/* <MDBInput
                        wrapperClass="mb-4 mx-5 w-100"
                        labelClass="text-white"
                        wrapperStyle={{}}
                        label="Cursos a cargo"
                        name="courseInCharge"
                        value={values.courseInCharge}
                        onChange={handleChange}
                        id="formControlcourseInCharge"
                        type="text"
                        size="lg"
                        minLength={3}
                        maxLength={30}
                        required
                      /> */}
                      <MDBRow className="g-3 w-100 mb-2">
                        <MDBInput
                          wrapperClass="w-100"
                          labelClass="text-white"
                          label="Contraseña"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          id="formControlPassword"
                          type="password"
                          size="lg"
                          minLength={8}
                          maxLength={30}
                          required
                        />
                        <MDBCol size="auto">
                          <span
                            id="textExample2"
                            className="form-text text-white"
                          >
                            Mínimo 8 caracteres, una mayúscula, un número y un
                            caracter especial.
                          </span>
                        </MDBCol>
                      </MDBRow>

                      <MDBInput
                        wrapperClass="mb-4 mx-5 w-100"
                        labelClass="text-white"
                        label="Repita su contraseña"
                        name="password2"
                        value={values.password2}
                        onChange={handleChange}
                        id="formControlPassword2"
                        type="password"
                        size="lg"
                        minLength={8}
                        maxLength={30}
                        required
                      />

                      <MDBBtn
                        type="submit"
                        className="mx-2 mb-2 px-5 my-2 button"
                        size="lg"
                      >
                        Registrarse
                      </MDBBtn>
                      {Object.keys(errors).length != 0
                        ? Object.values(errors).map((error, i) => (
                            <Alert key={i} variant="danger">
                              {error}
                            </Alert>
                          ))
                        : null}
                      {Object.keys(error).length != 0
                        ? Object.values(error).map((error, i) => (
                            <Alert key={i} variant="danger">
                              {error}
                            </Alert>
                          ))
                        : null}
                      {Object.keys(successRegister).length != 0
                        ? Object.values(successRegister).map((message, i) => (
                            <Alert key={i} variant="success">
                              {message}
                            </Alert>
                          ))
                        : null}
                    </MDBCardBody>
                  </MDBCard>
                </Form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
