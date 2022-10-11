import React, { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { GiMagnifyingGlass } from "react-icons/gi";
import StudentModal from "../components/StudentModal/StudentModal";
import axiosConfig from "../config/axiosConfig";

const NormalStudentPage = () => {
  const [show, setShow] = useState(false);
  const [students, setStudents] = useState([]);
  const [subject, setSubject] = useState([]);
  const [id, setId] = useState(null);

  const handleShow = (id) => {
    setId(id);
    getStudent(id);
    setShow(true);
  };

  const getStudents = async () => {
    try {
      const response = await axiosConfig.get("/alumns/");
      setStudents(response.data.alumns);
    } catch (error) {
      console.log(error);
      alert("Error al traer los alumnos");
    }
  };

  const getStudent = async (studentId) => {
    try {
      const response = await axiosConfig.get(`/alumns/${studentId}`);
      setSubject(response.data.alumn.subjects);
    } catch (error) {
      alert("No se pueden mostrar las materias.");
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="container main-normal-students d-flex flex-wrap align-items-start justify-content-center pt-5">
      <div className="mt-4 overflow-auto">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Nombre completo</th>
              <th>Número de expediente</th>
              <th>Curso</th>
              <th>Cuota al día</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student, i) => (
              <tr key={i}>
                <td>{student.nameCompleted}</td>
                <td>{student._id}</td>
                <td>{student.curse}</td>
                <td className="text-center">{student.cuoteDay ? "🟢" : "🟠"}</td>
                <td>
                  <GiMagnifyingGlass
                    onClick={() => handleShow(student._id)}
                    className="fs-3"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <StudentModal
          show={show}
          setShow={setShow}
          id={id}
          setId={setId}
          subject={subject}
          setSubject={setSubject}
        />
      </div>
    </div>
  );
};

export default NormalStudentPage;
