import { createContext, useState } from "react";
import axiosConfig from "../config/axiosConfig";

export const AlumnsContext = createContext();

const AlumnsProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [valuesModal, setValuesModal] = useState({});

  const getStudents = async () => {
    try {
      const response = await axiosConfig.get("/alumns");
      setStudents(response.data.alumns);
    } catch (error) {
      alert("error al traer los alumnos");
    }
  };

  const getStudent = async (id) => {
    try {
      const response = await axiosConfig.get("/alumns/" + id);
      setValuesModal(response.data.alumn);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleAdd = async(values) =>{
    try {
        const response = await axiosConfig.post('/alumns',values)
        console.log(response);
        getStudents()
    } catch (error) {
        alert('Error al cargar un nuevo alumno')
        console.log(error);
    }
}

const handleEdit = async ( values,id) => {
    try {
      const response = await axiosConfig.put("/alumns/" + id, values);
      console.log(response)
      getStudents();
    } catch (error) {
      alert("Error al editar un alumno");
    }
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("¿Eliminar este alumno?")) {
        await axiosConfig.delete("/alumns/" + id);
        getStudents();
      }
    } catch (error) {
      alert("Error al eliminar el alumno");
    }
  };

  return (
    <AlumnsContext.Provider value={{ students, getStudents, handleDelete, handleAdd,getStudent, valuesModal, handleEdit }}>
      {children}
    </AlumnsContext.Provider>
  );
};

export default AlumnsProvider;
