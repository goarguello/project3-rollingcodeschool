import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./RegisterForm.css"

const RegisterForm = () => {
  const [user, setUser] = useState({
    nameComplete: "",
    email: "",
    phone: "",
    adress: "",
    courseInCharge: "",
    state: false,
    password: "",
    password2: ""
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    //* Aca va el pedido axios a el back
  };

  console.log("USER", user);

  return (
    
    <div className="container d-flex justify-content-center align-items-center box-register">
    <Form className="form shadow rounded d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicEmail">
        <Form.Label>Nombre completo: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre completo"
          name="nameComplete"
          value={user.nameComplete}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicEmail">
        <Form.Label>Correo electrónico:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu correo electrónico"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicEmail">
        <Form.Label>Número de teléfono: </Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingresa tu número de teléfono"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicEmail">
        <Form.Label>Dirección: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu dirección"
          name="adress"
          value={user.adress}
          onChange={handleChange}
        />
      </Form.Group>
      {/* //* Ver si va lo de ingresar los cursos a cargo */}
      {/* <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicEmail">
        <Form.Label>Cursos a cargo: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tus cursos a cargo"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </Form.Group> */}
      

      <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicPassword">
        <Form.Label>Contraseña: </Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa tu contraseña"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicPassword">
        <Form.Label>Repite la contraseña: </Form.Label>
        <Form.Control
          type="password"
          placeholder="Repite la contraseña"
          name="password2"
          value={user.password2}
          onChange={handleChange}
        />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>
  </div>
  );
};

export default RegisterForm;
