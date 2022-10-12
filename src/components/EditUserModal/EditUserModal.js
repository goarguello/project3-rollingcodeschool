import { Modal } from "react-bootstrap";
import EditUserForm from "../EditUserForm/EditUserForm";

const EditUserModal = ({ show, handleClose, getUser, user }) => {
    return ( 
        <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar un usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditUserForm user={user} handleClose={handleClose} getUser={getUser} /> 
          </Modal.Body>
        </Modal>
      </>
     );
}
 
export default EditUserModal;