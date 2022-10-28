import { createContext, useState } from "react";
import axiosConfig from "../config/axiosConfig";

export const AlumnsContext = createContext();

const AlumnsProvider = ({ children }) => {
  const [flag, setFlag] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [valuesModal, setValuesModal] = useState({});
  const [value, setValue] = useState({});
  const [error, setError] = useState({});

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
      setValue(response.data.alumn);
      setFlag(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleAdd = async (values) => {
    try {
      const response = await axiosConfig.post("/alumns", values);
      getStudents();
      setCloseModal(true);
    } catch (error) {
      setError({ message: error.response.data.errors[0].msg });
    }
  };

  const handleEdit = async (values, id) => {
    try {
      const response = await axiosConfig.put("/alumns/" + id, values);
      getStudents();
      setCloseModal(true);
    } catch (error) {
      setError({ message: error.response.data.errors[0].msg });
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
    <AlumnsContext.Provider
      value={{
        flag,
        setFlag,
        closeModal,
        setCloseModal,
        students,
        getStudents,
        handleDelete,
        handleAdd,
        getStudent,
        valuesModal,
        handleEdit,
        value,
        setValue,
        error,
        setError,
      }}
    >
      {children}
    </AlumnsContext.Provider>
  );
};

export default AlumnsProvider;
