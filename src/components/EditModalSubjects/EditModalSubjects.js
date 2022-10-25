/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { useEffect } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { SubjectContext } from "../../context/SubjectContext";
import EditSubjectForm from "../EditSubjectForm/EditSubjectForm";

const EditModalSubjects = ({ handleClose, show, subjectId }) => {
  const { getSubject, value, flag, setFlag } = useContext(SubjectContext);

  useEffect(() => {
    if (subjectId) {
      getSubject(subjectId);
    }
    setFlag(false)
  }, [subjectId]);

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Editar Materia</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {flag && value.name ? (
          <EditSubjectForm
            handleClose={handleClose}
            value={value}
          />
        ) : (
          <Spinner animation="border" />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default EditModalSubjects;
