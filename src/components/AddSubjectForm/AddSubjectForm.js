import React, { useContext, useEffect, useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { SUBJECT_INITAL_VALUES } from "../../constants";
import { SubjectContext } from "../../context/SubjectContext";
import { validationSubject } from "../../helpers/validations";
import useForm from "../../hooks/useForm";

const AddSubjectForm = ({ handleClose }) => {
  const { addSubject } = useContext(SubjectContext);

  const { values, handleChange, handleSubmit, errors } = useForm(
    SUBJECT_INITAL_VALUES,
    addSubject,
    validationSubject
  );

  // const handleSubmitForm = (e) => {
  //   if (Object.keys(errors).length === 0) {
  //     handleSubmit(e);
  //     console.log("ENTRE");
  //     handleClose();
  //   }
  // };

  return (
    <Form
      onSubmit={handleSubmit
        // handleSubmitForm
        // handleSubmit(e);
        // if (Object.keys(errors).length !== 0) {
        //   handleClose();
        // }
      }
    >
      <Form.Group className="mb-3">
        <Form.Control
          onChange={handleChange}
          className="campo-materia"
          type="text"
          placeholder="Materia"
          name="name"
          value={values.name}
          // minLength={3}
          // maxLength={20}
          // required
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button
          className="button w-50 mt-0"
          variant="primary"
          type="submit"
          // onClick={handleSubmitForm}
          // onClick={Object.keys(errors).length === 0 ? handleClose : null}
        >
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
    </Form>
  );
};

export default AddSubjectForm;
