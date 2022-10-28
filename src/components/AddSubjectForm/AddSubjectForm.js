import React, { useContext, useEffect, useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { SUBJECT_INITAL_VALUES } from "../../constants";
import { SubjectContext } from "../../context/SubjectContext";
import { validationSubject } from "../../helpers/validations";
import useForm from "../../hooks/useForm";

const AddSubjectForm = ({ handleClose }) => {
  const { addSubject, closeModal, setCloseModal, error, setError } =
    useContext(SubjectContext);

  const { values, handleChange, handleSubmit, errors } = useForm(
    SUBJECT_INITAL_VALUES,
    addSubject,
    validationSubject
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
  }, [closeModal, error]);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          onChange={handleChange}
          className="campo-materia"
          type="text"
          placeholder="Materia"
          name="name"
          value={values.name}
          minLength={3}
          maxLength={20}
          required
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button className="button w-50 mt-0" variant="primary" type="submit">
          Agregar
        </Button>
      </div>
      <div className="d-flex justify-content-end">
        <Button
          className="button w-50 mt-2"
          variant="primary"
          onClick={handleClose}
        >
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

export default AddSubjectForm;
