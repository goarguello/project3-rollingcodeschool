import React, { useContext } from 'react'
import SubjectTable from '../components/SubjectTable/SubjectTable'

const SubjectPage = () => {
  return (
    <div className='container my-5'>
      <h1 className="text-center">Página de Administración de Materias</h1>
      <h2 className='text-center'>Para agregar alumnos a una materia has click en ella</h2>
      <SubjectTable/>
    </div>
  )
}

export default SubjectPage