/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useEffect } from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import axiosConfig from '../../config/axiosConfig'

const EditModalSubjects = ({editting, getSubjects, handleCloseEditSubject, showEditSubject, editSelected}) => {
  const [value, setValue] = useState({})
 
  
  const handleEditSubject = async (e) => {
    e.preventDefault()
    try {
      const validation = /^[\s\S]{0,20}$/
      if(!validation.test(value.name)) return alert('Maximo 20 caracteres')
      if(!value.name) return alert('Campo Materia requerido')
      await axiosConfig.put(`/subjects/${editSelected}`, value)
      handleCloseEditSubject()
      getSubjects()
    } catch (error) {
      console.log(error);
    }
  }

  const getSubject = async () => {
    try {
      const res = await axiosConfig.get(`/subjects/${editSelected}`)
      setValue(res.data);
      
     } catch (error) {
       console.log(error);
     }
   }
   useEffect(() => {
    if (editting) {
      getSubject()
    }
  }, [editSelected])
      
  return (
    <Modal show={showEditSubject} onHide={handleCloseEditSubject} centered backdrop='static'>
    <Modal.Header closeButton>
      <Modal.Title>Editar Materia</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleEditSubject}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Control value={value.name} pattern="^[\s\S]{0,20}$" className='campo-materia' onChange={(e) => setValue({name: e.target.value})} type="text" placeholder="introduce la Modicacion" />
        </Form.Group>
          <div className='d-flex justify-content-end'>
          <Button variant="primary" type="submit">
            Modificar
          </Button>
          </div>
      </Form>
    </Modal.Body>
  </Modal>
  )
}
            
export default EditModalSubjects