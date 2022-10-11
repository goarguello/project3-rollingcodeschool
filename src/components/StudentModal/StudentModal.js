import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axiosConfig from "../../config/axiosConfig";

function StudentModal({ show, setShow, setId, subject, setSubject }) {

  const handleClose = () => {
    setId(null);
    setSubject([]);
    setShow(false);
  };

  console.log(subject)

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Materias en curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>Materias xd</Modal.Body>
        <Modal.Footer>
          <Button className="button" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentModal;
