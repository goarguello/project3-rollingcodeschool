/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Table, Spinner, Button, Pagination } from 'react-bootstrap'
import axiosConfig from '../../config/axiosConfig'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { HiDocumentAdd } from 'react-icons/hi'
import AddModalSubject from '../AddModalsubject/AddModalSubject'
import EditModalSubjects from '../EditModalSubjects/EditModalSubjects'
import './SubjectTable.css'
import StudentsInSubjectsModal from '../studentsInSubjectsModal/StudentsInSubjectsModal'

const SubjectTable = () => {
  const [subjectsData, setSubjectsData] = useState([])
  const [showAddSubject, setshowAddSubject] = useState(false)
  const [showEditSubject, setShowEditSubject] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalSubjects, setTotalSubjects] = useState(0)
  const [editSelected, setEditSelected] = useState(null)
  const [editting, setEditting] = useState(false)
  const [gettingSubject, setGettingSubject] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState(null)
  
  const [showSubjectAlumns, setShowSubjectAlumns] = useState(false)

  const handleCloseAddSubject = () => setshowAddSubject(false);
  const handleShowAddSubject = () => setshowAddSubject(true);

  const handleCloseEditSubject = () => setShowEditSubject(false);
  const handleShowEditSubject = () => setShowEditSubject(true);

  const handleCloseSubjectAlumns = () => setShowSubjectAlumns(false);
  const handleShowSubjectAlumns = () => setShowSubjectAlumns(true);

  const getSubjects = async () => {
      try {
        const res = await axiosConfig.get(`/subjects?page=${page}&limit=10`)
        setSubjectsData(res.data.subjects);
        console.log(res.data.subjects);
        setTotalSubjects(res.data.total)
        setIsLoading(false)
      } catch (error) {
        alert(error.message);
      }
  }
  
  useEffect(() => {
    getSubjects()
  }, [page])
  
  const deleteSubject = async (id) => {
    try {
      if(window.confirm('¿Estas seguro de eliminar la materia?')) {
        await axiosConfig.delete(`/subjects/${id}`)
      }
      getSubjects()
    } catch (error) {
      alert(error.message);
    }

  }
  const editSubject = (id) => {
    setEditSelected(id)
    handleShowEditSubject()
    setEditting(true)
  }
 
  let items = []
   for (let number= 1; number <= Math.ceil(totalSubjects / 10); number++) {
     items.push(<Pagination.Item key={number} onClick={() => setPage(number)} active={number === page}>{number}</Pagination.Item> )
   }
   
   const selectedS = (id) => {
    setSelectedSubject(id)
    handleShowSubjectAlumns()
    setGettingSubject(true)
   }
  return (
    <>
      <div className='d-flex justify-content-between me-3 my-3'>
        <Pagination>{items}</Pagination>
        <button onClick={handleShowAddSubject} className='btn btn-success shadow'><HiDocumentAdd/></button>
      </div>
      <div className='table_subjects'>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>cantidad</th>
            <th>Materia</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            subjectsData?.map((sub, index) =>  {
              return <tr key={index}>
                      <td>{index + 1}</td> 
                      <td><span onClick={() => selectedS(sub._id)}>{sub.name}</span></td>
                      <td className='text-center'>
                        <Button variant='warning mx-2' onClick={() => editSubject(sub._id)}><AiFillEdit/></Button>
                        <Button variant='danger' onClick={() => deleteSubject(sub._id)}><BsFillTrashFill/></Button>
                      </td>
                    </tr>
            })
          }
        </tbody>
      </Table>
      </div>
        { isLoading && <div className='d-flex justify-content-center'><Spinner animation="border"/></div> }
      <AddModalSubject 
      getSubjects={getSubjects} 
      handleCloseAddSubject={handleCloseAddSubject} 
      showAddSubject={showAddSubject}/>
      
      <EditModalSubjects 
      editting={editting}
      getSubjects={getSubjects} 
      editSelected={editSelected} 
      handleCloseEditSubject={handleCloseEditSubject} 
      showEditSubject={showEditSubject}/>

      <StudentsInSubjectsModal
      handleCloseSubjectAlumns={handleCloseSubjectAlumns}
      showSubjectAlumns={showSubjectAlumns}
      selectedSubject={selectedSubject}
      gettingSubject={gettingSubject}
      
      />
    </>
  )
}
          
          
        

export default SubjectTable