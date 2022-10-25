import React, { useContext, useEffect, useState } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { SubjectContext } from "../../context/SubjectContext";

function ViewSubjectModal({ show, setShow, subjectId, setId }) {
  const handleClose = () => {
    setId(null);
    setShow(false);
  };
  const { getSubject, value, flag } = useContext(SubjectContext);

  useEffect(() => {
    if (subjectId) {
      getSubject(subjectId);
    }
  }, [subjectId]);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Estudiantes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup as="ul" numbered>
          {flag ? (
            value.students.length > 0 ? (
              value.students.map((student, i) => (
                <ListGroup.Item key={i} as="li">
                  {student.nameCompleted}
                </ListGroup.Item>
              ))
            ) : (
              <p>No hay alumnos.</p>
            )
          ) : (
            <Spinner animation="border" />
          )}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="button mt-0"
          onClick={() => {
            handleClose();
          }}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewSubjectModal;
