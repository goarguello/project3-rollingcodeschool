import React, { useContext, useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Next } from "react-bootstrap/esm/PageItem";
import { SubjectContext } from "../../context/SubjectContext";
import { validationSubject } from "../../helpers/validations";
import useForm from "../../hooks/useForm";

const EditSubjectForm = ({ userId, handleClose, value }) => {
  const {
    handleEditSubject,
    setFlag,
    setValue,
    closeModal,
    setCloseModal,
    error,
    setError,
  } = useContext(SubjectContext);

  const { values, handleChange, handleSubmit, errors } = useForm(
    value,
    handleEditSubject,
    validationSubject,
    value._id
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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
          className="campo-materia"
          placeholder="Intrucce la modificación."
          minLength={3}
          maxLength={20}
          required
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button className="button w-50  mt-0" type="submit">
          Modificar
        </Button>
      </div>
      <div className="d-flex justify-content-end">
        <Button
          className="button w-50  mt-3"
          onClick={() => {
            setFlag(false);
            setValue({});
            handleClose();
          }}
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

export default EditSubjectForm;
