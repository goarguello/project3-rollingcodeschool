import React, { useEffect, useState } from 'react'
import { Table, Spinner, Button } from 'react-bootstrap'
import axiosConfig from '../../config/axiosConfig'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { HiDocumentAdd } from 'react-icons/hi'

const SubjectTable = () => {
  const [subjectsData, setSubjectsData] = useState([])

  const getSubjects = async () => {
      try {
        const res = await axiosConfig.get('/subjects')
        setSubjectsData(res.data.subjects);
      } catch (error) {
        console.log(error);
      }
  }
  
  useEffect(() => {
    getSubjects()
  }, [])
  
  return (
    <>
      <div className='d-flex justify-content-end me-3 my-3'>
        <button className='btn btn-success shadow'><HiDocumentAdd/></button>
      </div>
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
                      <td>{sub.name}</td>
                      <td className='text-center'>
                        <Button variant='warning mx-2'><AiFillEdit/></Button>
                        <Button variant='danger'><BsFillTrashFill/></Button>
                      </td>
                    </tr>
            })
          }
        </tbody>
      </Table>
          { subjectsData.length === 0 && <div className='d-flex justify-content-center'><Spinner animation="border"/></div> }
    </>
  )
}
          
          
        

export default SubjectTable