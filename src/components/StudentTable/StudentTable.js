import { useContext, useEffect } from "react";
import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import axiosConfig from "../../config/axiosConfig";
import { AlumnsContext } from "../../context/AlumnsContext";
import AddAlModal from "../AddAlModal/AddAlModal";
import EditAlModal from "../EditAlModal/EditAlModal";
import "./StudentTable.css";

const StudentTable = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(null);

  const { students, getStudents, handleDelete } = useContext(AlumnsContext);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleEdit = (id) => {
    setSelected(id);
    handleShowEdit();
  };
  useEffect(() => {
    getStudents();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-end">
        <Button
          className="btn btn-success shadow my-2 w-auto"
          onClick={handleShowAdd}
        >
          Agregar un alumno
        </Button>
      </div>
      <Table className="Student-Table" responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Número de expediente</th>
            <th>Nombre completo</th>
            <th>Curso</th>
            <th>Al dia</th>
            <th>Telefono</th>
            <th>Domicilio</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student, index) => (
            <tr key={index} className="text-center">
              <td>{student._id}</td>
              <td>{student.nameCompleted}</td>
              <td>{student.curse}</td>
              <td>{student.cuoteDay ? "🟢" : "🟠"}</td>
              <td>{student.phone}</td>
              <td>{student.adress}</td>
              <td>
                <Button
                  className="button mt-0"
                  onClick={() => handleEdit(student._id)}
                >
                  <AiFillEdit />
                  EDITAR
                </Button>
              </td>
              <td>
                <Button
                  className="button mt-0"
                  onClick={() => handleDelete(student._id)}
                >
                  <AiFillDelete /> ELIMINAR
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddAlModal
        handleCloseAdd={handleCloseAdd}
        showAdd={showAdd}
        getStudents={getStudents}
      />
      <EditAlModal
        handleCloseEdit={handleCloseEdit}
        showEdit={showEdit}
        getStudents={getStudents}
        selected={selected}
      />
    </>
  );
};

export default StudentTable;

{
  /* <Button variant='warning' onClick={()=>handleEdit(bike.id)} className='me-2'><AiFillEdit className='border-text'/></Button>
<Button variant='danger' onClick={()=>handleDelete(bike.id)}><AiFillDelete/></Button> */
}
