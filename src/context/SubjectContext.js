import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../config/axiosConfig";

export const SubjectContext = createContext();

const SubjectProvider = ({ children }) => {
  const [value, setValue] = useState({ name: "" });
  const [flag, setFlag] = useState(false);
  const [page, setPage] = useState(1);
  const [subjects, setSubjects] = useState([]);
  const [totalSubjects, setTotalSubjects] = useState(0);
  const [errors, setErrors] = useState([{}]);
  const navigate = useNavigate()

  const addSubject = async (values) => {
    try {
      const response = await axiosConfig.post("/subjects", values);
      console.log(response)
      getSubjects();
    } catch (error) {
      console.log(error);
    }
  };

  const getSubjects = async () => {
    try {
      const res = await axiosConfig.get(`/subjects?page=${page}&limit=10`);
      setSubjects(res.data.subjects);
      setTotalSubjects(res.data.total);
    } catch (error) {
      setErrors(error);
    }
  };

  const getSubject = async (id) => {
    try {
      const res = await axiosConfig.get(`/subjects/${id}`);
      setValue(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditSubject = async ( values, id) => {
    try {
      await axiosConfig.put(`/subjects/${id}`, values);
      getSubjects();
      navigate("/subject-admin")
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSubject = async (values) => {
    try {
      if (window.confirm("¿Estas seguro de eliminar la materia?")) {
        await axiosConfig.delete(`/subjects/${values}`);
      }
      getSubjects();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SubjectContext.Provider
      value={{
        //GUARDAS LA LOGICA Y LOS ESTADOS QUE QUIERAS COMPARTIR
        addSubject,
        getSubjects,
        getSubject,
        handleEditSubject,
        value,
        setValue,
        subjects,
        deleteSubject,
        totalSubjects,
        setTotalSubjects,
        page,
        setPage,
        errors,
        flag,
        setFlag,
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};

export default SubjectProvider;
