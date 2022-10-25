import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import AddAlForm from '../AddAlForm/AddAlForm';

const AddAlModal = ({showAdd, handleCloseAdd, getStudents}) => {
  return (
    <>
      <Modal show={showAdd} onHide={handleCloseAdd} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agregar un alumno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddAlForm getStudents={getStudents} handleClose={handleCloseAdd} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddAlModal