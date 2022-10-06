import React, { useEffect, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";
import { REGISTER_INITIAL_VALUES } from "../../constants";
import { validationRegister } from "../../helpers/validations";
import useForm from "../../hooks/useForm";
import "./RegisterForm.css";

const RegisterForm = () => {
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   adress: "",
  //   courseInCharge: "",
  //   state: false,
  //   password: "",
  //   password2: "",
  // });
  // const [errors, setErrors] = useState([]);

  // const handleChange = (event) => {
  //   setUser({
  //     ...user,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   //* Aca va el pedido axios a el back
  const register = async (values) => {
    try {
      const userNew = await axiosConfig.post("/users", values);
      if (userNew.status === 201) window.alert(userNew.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    REGISTER_INITIAL_VALUES,
    register,
    validationRegister
  );

  // console.log("USER", user);

  return (
    <div className="main">
      <div className="container d-flex justify-content-center align-items-center box-register">
        <Form
          className="form shadow rounded d-flex flex-column justify-content-center"
          onSubmit={handleSubmit}
        >
          <Form.Group
            className="mb-3 d-flex flex-column align-items-start"
            controlId="formBasicEmail"
          >
            <Form.Label>Nombre completo: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre completo"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex flex-column align-items-start"
            controlId="formBasicEmail"
          >
            <Form.Label>Correo electrónico:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo electrónico"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex flex-column align-items-start"
            controlId="formBasicEmail"
          >
            <Form.Label>Número de teléfono: </Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingresa tu número de teléfono"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex flex-column align-items-start"
            controlId="formBasicEmail"
          >
            <Form.Label>Dirección: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu dirección"
              name="adress"
              value={values.adress}
              onChange={handleChange}
            />
          </Form.Group>
          {/* //* Ver si va lo de ingresar los cursos a cargo */}
          <Form.Group
            className="mb-3 d-flex flex-column align-items-start"
            controlId="formBasicEmail"
          >
            <Form.Label>Cursos a cargo: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tus cursos a cargo"
              name="courseInCharge"
              value={values.courseInCharge}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex flex-column align-items-start"
            controlId="formBasicPassword"
          >
            <Form.Label>Contraseña: </Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex flex-column align-items-start"
            controlId="formBasicPassword"
          >
            <Form.Label>Repite la contraseña: </Form.Label>
            <Form.Control
              type="password"
              placeholder="Repite la contraseña"
              name="password2"
              value={values.password2}
              onChange={handleChange}
            />
          </Form.Group>

          <Button className="button" variant="primary" type="submit">
            Registrar
          </Button>
          {Object.keys(errors).length != 0
            ? Object.values(errors).map((error, i) => (
                <Alert key={i} className="mt-3" variant="danger">
                  {error}
                </Alert>
              ))
            : null}
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
