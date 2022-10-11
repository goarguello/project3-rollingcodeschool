import { useEffect } from "react";
import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";
import AddAlModal from "../AddAlModal/AddAlModal";
// import './StudentTable.css'


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
        <button onClick={handleShowAdd}>Agregar un alumno</button>
        <Table responsive striped bordered hover>
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
          <td>{student.address}</td>
          <td>
            <Button onClick={()=>handleEdit(student._id)}>Editar</Button>
          </td>
          <td>
            <Button  onClick={()=>handleDelete(student._id)}>Borrar</Button>
          </td>
        </tr>
        )
        }
      </tbody>
    </Table>
    <AddAlModal handleCloseAdd={handleCloseAdd} showAdd={showAdd} getStudents={getStudents} ></AddAlModal>
    {/* <EditAlModal handleCloseEdit={handleCloseEdit} showEdit={showEdit} getStudents={getStudents} selected={selected} ></EditAlModal> */}

    </>
     );
}
 
export default StudentTable;