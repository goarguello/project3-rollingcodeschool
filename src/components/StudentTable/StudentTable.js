import { useEffect } from "react";
import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import axiosInstance from "../../config/axiosInstance";
import './StudentTable.css'


const StudentTable = () => {
    const [students, setStudents] = useState([]);
    const getStudents = async()=>{
        try {
            const response = await axiosInstance.get('/alumns/');
            setStudents(response.data.alumns);
            
        } catch (error) {
            alert('error al traer los alumnos')
        }
    }
    useEffect(()=>{
        getStudents()
    },[])
    return ( 
        <>
        <button>Agregar un alumno</button>
        <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Complete Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>{
        students.map((student,index)=>
        <tr key={index}>
          <td>1</td>
          <td>{student.nameCompleted}</td>
          <td>{student.phone}</td>
          <td>{student.address}</td>
          <td>
            <Button>Editar</Button>
            <Button>Borrar</Button>
          </td>
        </tr>
        )
        }
      </tbody>
    </Table>
    </>
     );
}
 
export default StudentTable;