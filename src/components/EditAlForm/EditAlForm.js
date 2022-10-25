import { useContext, useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";
import { COURSES_VALUES } from "../../constants";
import { AlumnsContext } from "../../context/AlumnsContext";
import { validationAddAl } from "../../helpers/validations";
import useForm from "../../hooks/useForm";

const EditAlForm = ({ handleClose, value }) => {
  const { handleEdit, setValue, setFlag } = useContext(AlumnsContext);

  const { values, handleChange, handleSubmit, errors } = useForm(
    value,
    handleEdit,
    validationAddAl,
    value._id
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
          type="text"
          name="nameCompleted"
          onChange={handleChange}
          value={values.nameCompleted}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Curso</Form.Label>
        {COURSES_VALUES?.map((course, i) => {
          if (values.curse?.includes(course)) {
            return (
              <div key={i} className="mb-3">
                <Form.Check
                  type="radio"
                  name="curse"
                  checked={true}
                  label={course}
                  value={course}
                  onChange={handleChange}
                />
              </div>
            );
          } else {
            return (
              <div key={i} className="mb-3">
                <Form.Check
                  type="radio"
                  name="curse"
                  checked={false}
                  label={course}
                  value={course}
                  onChange={handleChange}
                />
              </div>
            );
          }
        })}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Cuota al día?</Form.Label>
        <Form.Check
          type="switch"
          name="cuoteDay"
          checked={values.cuoteDay}
          onChange={handleChange}
          value={values.cuoteDay}
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
      <div className="d-flex justify-content-end">
        <Button
          className="button mt-3"
          type="submit"
          // onClick={handleClose}
        >
          Editar
        </Button>
      </div>
      <div className="d-flex justify-content-end">
        <Button
          className="button mt-3"
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
    </Form>
  );
};

export default EditAlForm;
