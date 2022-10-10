import { Modal } from 'react-bootstrap';
import EditAlForm from '../EditAlForm/EditAlForm';

const EditAlModal = ({showEdit, handleCloseEdit, getStudents, selected}) => {
  return (
    <>
      <Modal show={showEdit} onHide={handleCloseEdit} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agregar un alumno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditAlForm getStudents={getStudents} handleCloseEdit={handleCloseEdit} selected={selected} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditAlModal