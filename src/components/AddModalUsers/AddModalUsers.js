import { Modal } from "react-bootstrap";
import AddUserForm from "../AddUserForm/AddUserForm";

function AddModalUsers({ show, handleClose, getUsers }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar un usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddUserForm handleClose={handleClose} getUsers={getUsers} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModalUsers;
