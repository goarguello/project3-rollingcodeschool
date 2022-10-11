import { useEffect } from "react";
import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import axiosConfig from "../../config/axiosConfig";
import AddAlModal from "../AddAlModal/AddAlModal";
import EditAlModal from "../EditAlModal/EditAlModal";
import './StudentTable.css'


const StudentTable = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [selected, setSelected] = useState(false);
    const [students, setStudents] = useState([]);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const getStudents = async()=>{
        try {
            const response = await axiosConfig.get('/alumns')
            console.log(response);
            setStudents(response.data.alumns);
            
        } catch (error) {
            alert('error al traer los alumnos')
        }
    }
    const handleDelete = async(id)=>{
      try {
        await axiosConfig.delete('/alumns/'+id);
        getStudents();
      } catch (error) {
        alert('Error al eliminar el alumno')
      }
    }
    const handleEdit = (id)=>{
      setSelected(id);
      handleShowEdit();
    }
    useEffect(()=>{
        getStudents()
    },[])
    return ( 
        <>
        <Button className="btn-alumns" onClick={handleShowAdd}>Agregar un alumno</Button>
        <Table className="Student-Table" responsive striped bordered hover>
      <thead>
        <tr className="">
          <th>#</th>
          <th>Nombre completo</th>
          <th>Curso</th>
          <th>Al dia</th>
          <th>Telefono</th>
          <th>Domicilio</th>
          <th> </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>{
        students.map((student,index)=>
        <tr key={index}>
          <td>1</td>
          <td>{student.nameCompleted}</td>
          <td>{student.curse}</td>
          <td>{student.cuoteDay}</td>
          <td>{student.phone}</td>
          <td>{student.adress}</td>
          <td>
            <Button className="btn-alumns" onClick={()=>handleShowEdit(student._id)}><AiFillEdit/>EDITAR</Button>
          </td>
          <td>
            <Button className="btn-alumns" onClick={()=>handleDelete(student._id)}><AiFillDelete/> ELIMINAR</Button>
          </td>
        </tr>
        )
        }
      </tbody>
    </Table>
    <AddAlModal handleCloseAdd={handleCloseAdd} showAdd={showAdd} getStudents={getStudents} />
    <EditAlModal handleCloseEdit={handleCloseEdit} showEdit={showEdit} getStudents={getStudents} selected={selected} />

    </>
     );
}
 
export default StudentTable;

{/* <Button variant='warning' onClick={()=>handleEdit(bike.id)} className='me-2'><AiFillEdit className='border-text'/></Button>
<Button variant='danger' onClick={()=>handleDelete(bike.id)}><AiFillDelete/></Button> */}