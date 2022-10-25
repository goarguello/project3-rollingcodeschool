import React, { useContext, useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import ViewSubjectModal from "../components/ViewSubjectModal/ViewSubjectModal";
import { SubjectContext } from "../context/SubjectContext";

import useMediaQuery from "../hooks/useMediaQuery";

const SubjectsList = () => {
  const [id, setId] = useState(null);
  const [show, setShow] = useState(false);
  const handleShow = (subjectId) => {
    setId(subjectId);
    setShow(true);
  };

  const { width } = useMediaQuery();

  const { subjects, getSubjects } = useContext(SubjectContext);

  useEffect(() => {
    getSubjects();
  }, []);
  console.log(subjects);
  return (
    <>
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
                <Badge
                  bg="primary"
                  pill
                  onClick={() => handleShow(subject._id)}
                >
                  Cantidad de alumnos: {subject.students.length}
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
                <Badge
                  bg="primary"
                  pill
                  onClick={() => handleShow(subject._id)}
                >
                  Cantidad de alumnos: {subject.students.length}
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
      <ViewSubjectModal show={show} setShow={setShow} subjectId={id} setId={setId} />
    </>
  );
};

export default SubjectsList;
