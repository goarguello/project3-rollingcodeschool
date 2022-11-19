import { Modal } from "react-bootstrap";
import AddSubjectForm from "../AddSubjectForm/AddSubjectForm";
import "./AddModalSubject.css";

const AddModalSubject = ({
  handleClose,
  show,
  getSubjects,
}) => {
  

  return (
    <>
      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Agregar Materia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddSubjectForm handleClose={handleClose}  />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddModalSubject;
