import React, { useContext, useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { SUBJECT_INITAL_VALUES } from "../../constants";
import { SubjectContext } from "../../context/SubjectContext";
import { validationSubject } from "../../helpers/validations";
import useForm from "../../hooks/useForm";
import AddSubjectForm from "../AddSubjectForm/AddSubjectForm";
import "./AddModalSubject.css";

const AddModalSubject = ({
  handleClose,
  show,
  getSubjects,
}) => {
  

  return (
    <>
      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Agregar Materia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddSubjectForm handleClose={handleClose}  />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddModalSubject;
