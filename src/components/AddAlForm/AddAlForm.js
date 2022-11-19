import { useContext, useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";
import { ALUMNS_INITIAL_VALUES, COURSES_VALUES } from "../../constants";
import { AlumnsContext } from "../../context/AlumnsContext";
import { validationAddAl } from "../../helpers/validations";
import useForm from "../../hooks/useForm";

const AddAlForm = ({ getStudents, handleClose }) => {
  const { handleAdd, closeModal, setCloseModal, error, setError } =
    useContext(AlumnsContext);

  const { values, handleChange, handleSubmit, errors } = useForm(
    ALUMNS_INITIAL_VALUES,
    handleAdd,
    validationAddAl
  );

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError({});
      }, 5000);
    }
    if (closeModal) {
      handleClose();
    }
    setCloseModal(false);
  }, [closeModal]);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
          type="text"
          name="nameCompleted"
          onChange={handleChange}
          value={values.nameCompleted}
          minLength={3}
          maxLength={30}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Curso</Form.Label>
        {COURSES_VALUES?.map((course, i) => (
          <div key={i} className="mb-3">
            <Form.Check
              type="radio"
              name="curse"
              value={course}
              label={course}
              onChange={handleChange}
            />
          </div>
        ))}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Cuota al día?</Form.Label>
        <Form.Check
          type="switch"
          name="cuoteDay"
          onChange={handleChange}
          value={values.cuoteDay}
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
          minLength={5}
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
          maxLength={30}
          required
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button
          className="button mt-3"
          variant="primary"
          type="submit"
          
        >
          Agregar
        </Button>
      </div>
      <div className="d-flex justify-content-end">
        <Button className="button mt-3" onClick={handleClose}>
          Cerrar
        </Button>
      </div>
      {Object.keys(errors).length != 0
        ? Object.values(errors).map((error, i) => (
            <Alert key={i} variant="danger" className="mt-3 mb-0">
              {error}
            </Alert>
          ))
        : null}
      {Object.keys(error).length != 0
        ? Object.values(error).map((error, i) => (
            <Alert key={i} variant="danger" className="mt-3 mb-0">
              {error}
            </Alert>
          ))
        : null}
    </Form>
  );
};

export default AddAlForm;
