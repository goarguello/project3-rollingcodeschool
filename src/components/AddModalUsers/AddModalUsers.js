import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddUserForm from "../AddUserForm/AddUserForm";

function AddModalUsers({ show, handleClose, getUser }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar un usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddUserForm handleClose={handleClose} getUser={getUser} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModalUsers;
