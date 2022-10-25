import React, { useContext, useEffect, useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { Next } from "react-bootstrap/esm/PageItem";
import axiosConfig from "../../config/axiosConfig";
import { SubjectContext } from "../../context/SubjectContext";
import { validationSubject } from "../../helpers/validations";
import useForm from "../../hooks/useForm";

const EditSubjectForm = ({ userId, handleClose }) => {
  const [flag, setFlag] = useState(true);
  const { value, getSubject, handleEditSubject } = useContext(SubjectContext);

  const { values, handleChange, handleSubmit, errors } = useForm(
    value,
    handleEditSubject,
    validationSubject,
    value._id
  );

  useEffect(() => {
    getSubject(userId);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          value={values.name}
          name="name"
          className="campo-materia"
          onChange={handleChange}
          type="text"
          placeholder="Intrucce la modificación."
          // minLength={3}
          // maxLength={20}
          // required
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button className="button w-50  mt-0" variant="primary" type="submit">
          Modificar
        </Button>
      </div>
      <div className="d-flex justify-content-end">
        <Button
          className="button w-50  mt-3"
          variant="primary"
          type="submit"
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
    </Form>
  );
};

export default EditSubjectForm;
