import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";

const EditAlForm = ({ getStudents, handleCloseEdit, selected }) => {
  const [values, setValues] = useState({});
  const [valuesModal, setValuesModal] = useState({});
  const getStudent = async () => {
    try {
      const response = await axiosConfig.get("/alumns/" + selected);
      setValuesModal(response.data.alumn);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    getStudent();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axiosConfig.put("/alumns/" + selected, values);
      getStudents();
    } catch (error) {
      alert("Error al editar un alumno");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre completo</Form.Label>
        <div>{valuesModal.nameCompleted}</div>
        <Form.Control
          type="text"
          name="nameCompleted"
          onChange={handleChange}
          value={values.nameCompleted}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Curso</Form.Label>
        <div>{valuesModal.curse}</div>
        <Form.Control
          type="text"
          name="curse"
          onChange={handleChange}
          value={values.curse}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Telefono</Form.Label>
        <div>{valuesModal.phone}</div>
        <Form.Control
          type="number"
          name="phone"
          onChange={handleChange}
          value={values.phone}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Direccion</Form.Label>
        <div>{valuesModal.adress}</div>
        <Form.Control
          type="text"
          name="adress"
          onChange={handleChange}
          value={values.adress}
        />
      </Form.Group>

      <Button
        className="btn-alumns"
        variant="primary"
        type="submit"
        onClick={handleCloseEdit}
      >
        Editar
      </Button>
    </Form>
  );
};

export default EditAlForm;
