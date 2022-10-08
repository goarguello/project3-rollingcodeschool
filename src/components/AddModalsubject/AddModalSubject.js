import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import axiosConfig from '../../config/axiosConfig'

const AddModalSubject = ({handleCloseAddSubject, showAddSubject, getSubjects}) => {
  
  const [subjectValue, setSubjectValue] = useState({})
  
  const addSubject = async (e) => {
    e.preventDefault()
    try {
      await axiosConfig.post('/subjects', subjectValue)
      handleCloseAddSubject()
      getSubjects()
    } catch (error) {
      console.log(error);
    }
  }  
  
  return (
    <>
      <Modal show={showAddSubject} onHide={handleCloseAddSubject} centered backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Materia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addSubject}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={(e)=> setSubjectValue({name: e.target.value})} type="text" placeholder="Materia" />
            </Form.Group>
              <div className='d-flex justify-content-end'>
              <Button variant="primary" type="submit">
                Agregar
              </Button>
              </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}


export default AddModalSubject