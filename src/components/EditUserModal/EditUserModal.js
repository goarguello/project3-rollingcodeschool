import { useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import EditUserForm from "../EditUserForm/EditUserForm";

const EditUserModal = ({ show, handleClose, getUser, user }) => {
  const { getSingleUser, value, flag } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      getSingleUser(user);
    }
  }, [user]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar un usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {flag && value.name ? (
            <EditUserForm handleClose={handleClose} value={value} />
          ) : (
            "Cargando..."
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditUserModal;
