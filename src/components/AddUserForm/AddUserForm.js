import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";

const AddUserForm = ({ handleClose, getUser }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
    courseInCharge: "",
    state: false,
    password: "",
    password2: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userNew = await axiosConfig.post("/users", values);
      if (userNew.status === 201) {
        window.alert(userNew.data.message);
        getUser();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Telefono</Form.Label>
        <Form.Control
          type="number"
          name="phone"
          onChange={handleChange}
          value={values.phone}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Direccion</Form.Label>
        <Form.Control
          type="text"
          name="adress"
          onChange={handleChange}
          value={values.adress}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Curso a cargo</Form.Label>
        <Form.Control
          type="text"
          name="courseInCharge"
          onChange={handleChange}
          value={values.courseInCharge}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Repita la contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password2"
          onChange={handleChange}
          value={values.password2}
        />
      </Form.Group>

      <Button
        className="btn-alumns"
        variant="primary"
        type="submit"
        onClick={handleClose}
      >
        Agregar
      </Button>
      {/* {Object.keys(errors).length!=0?
      Object.values(errors).map(error=>
        <Alert variant="danger">
          {error}
        </Alert>
        )
      :null
    } */}
    </Form>
  );
};

export default AddUserForm;
