import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";

const EditUserForm = ({ user, handleClose, getUser }) => {
  const [values, setValues] = useState({});

  const handleSubmit = async (e, id, p) => {
    e.preventDefault();
    try {
      await axiosConfig.put(`/users/${id}`, {
        adress: values.adress,
        courseInCharge: values.courseInCharge,
        email: values.email,
        name: values.name,
        phone: values.phone,
        password: p,
      });
      //   if (userNew.status === 201) {
      //     window.alert(userNew.data.message);

      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleUser = async (id) => {
    try {
      const response = await axiosConfig.get(`/users/${id}`);
      setValues(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getSingleUser(user);
  }, []);

  console.log(values);
  return (
    <Form onSubmit={(e) => handleSubmit(e, values._id, values.password)}>
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

      {/* <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
        </Form.Group> */}

      {/* <Form.Group className="mb-3">
          <Form.Label>Repita la contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password2"
            onChange={handleChange}
            value={values.password2}
          />
        </Form.Group> */}

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

export default EditUserForm;
