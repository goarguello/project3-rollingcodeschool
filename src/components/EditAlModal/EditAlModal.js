import { useContext, useEffect } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { AlumnsContext } from "../../context/AlumnsContext";
import EditAlForm from "../EditAlForm/EditAlForm";

const EditAlModal = ({ showEdit, handleCloseEdit, selected }) => {
  const { getStudent, value, flag, setFlag } = useContext(AlumnsContext);

  useEffect(() => {
    if (selected) {
      getStudent(selected);
    }
    setFlag(false);
  }, [selected]);

  return (
    <>
      <Modal
        show={showEdit}
        onHide={handleCloseEdit}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar un alumno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {flag ? (
            <EditAlForm handleClose={handleCloseEdit} value={value} />
          ) : (
            <Spinner animation="border" />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditAlModal;
