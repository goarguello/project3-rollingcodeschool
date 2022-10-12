import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import axiosConfig from "../../config/axiosConfig";

const StudentsInSubjectsModal = ({
  gettingSubject,
  showSubjectAlumns,
  handleCloseSubjectAlumns,
  selectedSubject,
}) => {
  const [arrayAlumns, setArrayAlumns] = useState([]);
  const [teacher, setTeacher] = useState(null);
  const [sub, setSub] = useState(null);
  const [selectedAlumn, setSelectedAlumn] = useState(null);
  const [alumnsOption, setAlumnsOption] = useState([]);

  const getAlumnsInSubjects = async () => {
    try {
      const res = await axiosConfig.get(`/subjects/${selectedSubject}`);
      setSub(res?.data?.name);
      setArrayAlumns(res?.data?.students);
      setTeacher(res?.data?.teacher?.name);
    } catch (error) {
      alert("Error al traer la materia " + error.message);
    }
  };

  useEffect(() => {
    if (gettingSubject) {
      getAlumnsInSubjects();
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [selectedSubject]);

  const getAlumns = async () => {
    try {
      const res = await axiosConfig.get("/alumns");
      setAlumnsOption(res.data.alumns);
    } catch (error) {
      alert("error al traer los alumnos");
    }
  };

  const addAlumnToSubject = async () => {    
    try {
      console.log(arrayAlumns)
      if (!arrayAlumns.some((alumn) => (alumn._id == selectedAlumn))) {
        await axiosConfig.put("/subjects/student", {
          id: selectedAlumn,
          idSubject: selectedSubject,
        });
        getAlumnsInSubjects();
      } else {
        alert("Este alumno ya esta agregado");
      }
    } catch (error) {
      alert("Error al añadir alumno a la materia");
    }
  };

  const deleteAlumn = async (id) => {
    console.log("ID", id);
    console.log("slectedSubjectID", selectedSubject);
    try {
      await axiosConfig.put("/subjects/student-delete", {
        id,
        idSubject: selectedSubject,
      });
      getAlumnsInSubjects();
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (selectedAlumn) {
      addAlumnToSubject();
    }
  }, [selectedAlumn]);

  return (
    <>
      <Modal
        show={showSubjectAlumns}
        onHide={handleCloseSubjectAlumns}
        centered
        backdrop="static"
      >
        <Modal.Header className="d-flex justify-content-around" closeButton>
          <Modal.Title> {sub}</Modal.Title>
        </Modal.Header>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <Button className="button mt-2 ms-2" onClick={getAlumns}>
            Agregar Alumno
          </Button>
          <ul className="mt-2 mb-0">
            {alumnsOption.map((alumn) => {
              return (
                <li
                  onClick={() => {
                    setSelectedAlumn(alumn._id);
                    setAlumnsOption([]);
                  }}
                  key={alumn._id}
                >
                  {alumn.nameCompleted}
                </li>
              );
            })}
          </ul>
        </div>

        <Modal.Body>
          <div>Alumnos: {teacher}</div>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {arrayAlumns?.map(({ nameCompleted, _id }, index) => {
                return (
                  <tr key={index} className="text-center">
                    <td>{nameCompleted}</td>
                    <td>
                      <Button
                        className="button w-auto mt-0 mx-auto"
                        variant="danger"
                        onClick={() => deleteAlumn(_id)}
                      >
                        <BsFillTrashFill />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StudentsInSubjectsModal;
