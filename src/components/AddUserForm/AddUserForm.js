import { useContext, useEffect, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";
import { REGISTER_INITIAL_VALUES, COURSES_VALUES } from "../../constants";
import { UserContext } from "../../context/UserContext";
import { validationRegister } from "../../helpers/validations";
import useForm from "../../hooks/useForm";

const AddUserForm = ({ handleClose }) => {
  const {
    registerTwo,
    successRegister,
    setSuccessRegister,
    error,
    setError,
    flag,
    setFlag,
    closeModal,
    setCloseModal,
  } = useContext(UserContext);

  const { values, handleChange, handleSubmit, errors } = useForm(
    REGISTER_INITIAL_VALUES,
    registerTwo,
    validationRegister
  );

  useEffect(() => {
    if (closeModal) {
      handleClose();
    }
    setCloseModal(false);
  }, [closeModal]);

  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e);
        setFlag(!flag);
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
          minLength={3}
          maxLength={25}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          minLength={1}
          maxLength={50}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Telefono</Form.Label>
        <Form.Control
          type="number"
          name="phone"
          onChange={handleChange}
          value={values.phone}
          maxLength={10}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Direccion</Form.Label>
        <Form.Control
          type="text"
          name="adress"
          onChange={handleChange}
          value={values.adress}
          minLength={5}
          maxLength={25}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Curso a cargo</Form.Label>
        {COURSES_VALUES?.map((course, i) => (
          <div key={i}>
            <Form.Check
              type="checkbox"
              name="courseInCharge"
              onChange={handleChange}
              value={course}
              label={course}
            />
          </div>
        ))}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          minLength={8}
          maxLength={30}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Repita la contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password2"
          onChange={handleChange}
          value={values.password2}
          minLength={8}
          maxLength={30}
          required
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button
          className="button w-50 me-2 mt-0"
          variant="primary"
          type="submit"
        >
          Agregar
        </Button>
      </div>
      <div className="d-flex justify-content-end">
        <Button
          className="button w-50 me-2 mt-2"
          variant="primary"
          onClick={handleClose}
        >
          Cerrar
        </Button>
      </div>
      {Object.keys(errors).length != 0
        ? Object.values(errors).map((error, i) => (
            <Alert className="mt-3 mb-0" key={i} variant="danger">
              {error}
            </Alert>
          ))
        : null}
      {Object.keys(error).length != 0
        ? Object.values(error).map((error, i) => (
            <Alert className="mt-3 mb-0" key={i} variant="danger">
              {error}
            </Alert>
          ))
        : null}
      {Object.keys(successRegister).length != 0
        ? Object.values(successRegister).map((message, i) => (
            <Alert className="mt-3 mb-0" key={i} variant="success">
              {message}
            </Alert>
          ))
        : null}
    </Form>
  );
};

export default AddUserForm;
