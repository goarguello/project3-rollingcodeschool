/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { SubjectContext } from "../../context/SubjectContext";
import EditSubjectForm from "../EditSubjectForm/EditSubjectForm";

const EditModalSubjects = ({ handleClose, show, userId }) => {
  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Editar Materia</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditSubjectForm userId={userId} handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default EditModalSubjects;
