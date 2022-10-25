import { useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { AlumnsContext } from "../../context/AlumnsContext";
import EditAlForm from "../EditAlForm/EditAlForm";

const EditAlModal = ({ showEdit, handleCloseEdit, selected }) => {
  const { getStudent, value, flag } = useContext(AlumnsContext);

  useEffect(() => {
    if (selected) {
      getStudent(selected);
    }
  }, [selected]);

  return (
    <>
      <Modal show={showEdit} onHide={handleCloseEdit} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar un alumno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {flag  ? (
            <EditAlForm handleClose={handleCloseEdit} value={value} />
          ) : (
            "Cargando..."
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditAlModal;
