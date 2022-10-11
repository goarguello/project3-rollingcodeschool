import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import axiosConfig from "../config/axiosConfig";

import useMediaQuery from "../hooks/useMediaQuery";

const SubjectsList = () => {
  const [subjects, setSubjects] = useState([]);
  const { width } = useMediaQuery();

  const getSubjects = async () => {
    try {
      const response = await axiosConfig.get("/subjects/");
      setSubjects(response.data.subjects);
    } catch (error) {
      alert("No se pueden mostrar las materias.");
    }
  };

  useEffect(() => {
    getSubjects();
  }, []);


  return (
    <div className="container main-normal-subjects d-flex flex-wrap align-items-start justify-content-center pt-5">
      {width < 768 ? (
        <ListGroup as="ol" numbered className="w-100">
            
          {subjects?.map((subject, i) => (
            <ListGroup.Item
              key={i}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{subject.name}</div>
                Curso
              </div>
              <Badge bg="primary" pill>
                Cantidad de alumnos
              </Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <ListGroup as="ol" numbered className="w-50">
          {subjects?.map((subject, i) => (
            <ListGroup.Item
              key={i}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{subject.name}</div>
                Curso
              </div>
              <Badge bg="primary" pill>
                Cantidad de alumnos
              </Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default SubjectsList;
