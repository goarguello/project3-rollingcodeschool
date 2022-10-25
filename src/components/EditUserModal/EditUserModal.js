import { useContext, useEffect } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import EditUserForm from "../EditUserForm/EditUserForm";

const EditUserModal = ({ show, handleClose, getUser, user }) => {
  const { getSingleUser, value, flag, setFlag } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      getSingleUser(user);
    }
    setFlag(false)
  }, [user]);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Editar un usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {flag && value.name ? (
            <EditUserForm handleClose={handleClose} value={value} />
          ) : (
            <Spinner animation="border" />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditUserModal;
