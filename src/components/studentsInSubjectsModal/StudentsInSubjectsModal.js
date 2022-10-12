
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import axiosConfig from '../../config/axiosConfig'

const StudentsInSubjectsModal = ({gettingSubject, showSubjectAlumns, handleCloseSubjectAlumns, selectedSubject}) => {
  const [arrayAlumns, setArrayAlumns] = useState([])
  const [teacher, setTeacher] = useState(null)
  const [fullscreen] = useState(true);
  const [sub, setSub] = useState(null)
  const [selectedAlumn, setSelectedAlumn] = useState(null)
  const [alumnsOption, setAlumnsOption] = useState([])
  
  const getAlumnsInSubjects = async () => {
    try {
      const res = await axiosConfig.get(`/subjects/${selectedSubject}`)
      setSub(res?.data?.name)
      setArrayAlumns(res?.data?.students)
      setTeacher(res?.data?.teacher?.name);
    } catch (error) {
      alert('Error al traer la materia ' + error.message)
    }
  }
      
  useEffect(() => {
    if (gettingSubject) {
      getAlumnsInSubjects() 
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  },[selectedSubject])
      
  const getAlumns = async () => {
    try {
      const res = await axiosConfig.get('/alumns')
      setAlumnsOption(res.data.alumns);
    } catch (error) {
      alert('error al traer los alumnos')
    }
  }

  const addAlumnToSubject = async () => {
    
    
    try {
      await axiosConfig.put('/subjects/student',{id: selectedAlumn, idSubject: selectedSubject})
      getAlumnsInSubjects()
    } catch (error) {
      alert('Error al añadir alumno a la materia')
    }
  }
  
      useEffect(() => {
      if(selectedAlumn) {
        addAlumnToSubject()
      }
    },[selectedAlumn])


        

     
  return (
    <>
     
    <Modal show={showSubjectAlumns} fullscreen= {fullscreen} onHide={handleCloseSubjectAlumns} centered backdrop='static'>
    <Modal.Header className='d-flex justify-content-around' closeButton>
      <Modal.Title>Alumnos de {sub}</Modal.Title>
    </Modal.Header>
      <Button onClick={getAlumns}>Agregar Alumno</Button>
    {
      alumnsOption.map((alumn) => {
        return <li onClick={() => setSelectedAlumn(alumn._id)} key={alumn._id}>{alumn.nameCompleted}</li>
      })
      
    }

    
    <Modal.Body>
      <div>Profesor: {teacher}</div>
    <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>cantidad</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {
            arrayAlumns?.map(({nameCompleted}, index) =>  {
              return<tr key={index}>
                      <td className='text-black'>{index + 1}</td> 
                      <td className='text-black'>{nameCompleted}</td>
                    </tr>
            })
          }
        </tbody>
      </Table>
    </Modal.Body>
  </Modal>
  </>
    
  )
}

export default StudentsInSubjectsModal
        
  
  