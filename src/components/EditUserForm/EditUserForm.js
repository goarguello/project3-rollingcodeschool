import { useContext, useEffect } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { COURSES_VALUES } from "../../constants";
import { UserContext } from "../../context/UserContext";
import { validationRegister } from "../../helpers/validations";
import useForm from "../../hooks/useForm";

const EditUserForm = ({ handleClose, value }) => {
  const { editUser, setFlag, closeModal, setCloseModal, error } =
    useContext(UserContext);

  const { values, handleChange, handleSubmit, errors } = useForm(
    value,
    editUser,
    validationRegister,
    value._id,
    value.password
  );

  useEffect(() => {
    if (closeModal) {
      handleClose();
    }
    setCloseModal(false);
  }, [closeModal]);

  return (
    <Form onSubmit={(e) => handleSubmit(e, value._id, value.password)}>
      
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

        {COURSES_VALUES?.map((course, i) => {
          if (values.courseInCharge?.includes(course)) {
            return (
              <div key={i}>
                <Form.Check
                  type="checkbox"
                  name="courseInCharge"
                  checked={true}
                  onChange={handleChange}
                  value={course}
                  label={course}
                />
              </div>
            );
          } else {
            return (
              <div key={i}>
                <Form.Check
                  type="checkbox"
                  name="courseInCharge"
                  checked={false}
                  onChange={handleChange}
                  value={course}
                  label={course}
                />
              </div>
            );
          }
        })}
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button
          className="button mt-3"
          type="submit"
          
        >
          Modificar
        </Button>
      </div>
      <div className="d-flex justify-content-end">
        <Button
          className="button mt-3"
          onClick={() => {
            setFlag(false);
            handleClose();
          }}
        >
          Cerrar
        </Button>
      </div>

      {Object.keys(errors).length != 0
        ? Object.values(errors).map((error, i) => (
            <Alert key={i} className="mt-3 mb-0" variant="danger">
              {error}
            </Alert>
          ))
        : null}
      {Object.keys(error).length != 0
        ? Object.values(error).map((error, i) => (
            <Alert key={i} className="mt-3 mb-0" variant="danger">
              {error}
            </Alert>
          ))
        : null}
    </Form>
  );
};

export default EditUserForm;
