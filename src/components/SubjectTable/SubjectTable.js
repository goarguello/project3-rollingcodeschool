/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Table, Spinner, Button, Pagination } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { HiDocumentAdd } from "react-icons/hi";
import AddModalSubject from "../AddModalsubject/AddModalSubject";
import EditModalSubjects from "../EditModalSubjects/EditModalSubjects";
import "./SubjectTable.css";
import StudentsInSubjectsModal from "../studentsInSubjectsModal/StudentsInSubjectsModal";
import { SubjectContext } from "../../context/SubjectContext";

const SubjectTable = () => {
  const [subjectsData, setSubjectsData] = useState([]);
  const [showAddSubject, setshowAddSubject] = useState(false);
  const [showEditSubject, setShowEditSubject] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editSelected, setEditSelected] = useState(null);
  const [gettingSubject, setGettingSubject] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const [showSubjectAlumns, setShowSubjectAlumns] = useState(false);

  const {
    getSubjects,
    subjects,
    page,
    setPage,
    totalSubjects,
    flag,
    setFlag,
    deleteSubject,
  } = useContext(SubjectContext);

  const handleCloseAddSubject = () => {
    setshowAddSubject(false);
    setFlag(!flag);
  };
  const handleShowAddSubject = () => setshowAddSubject(true);

  const handleCloseEditSubject = () => {
    setEditSelected(null);
    setShowEditSubject(false);
  };
  const handleShowEditSubject = (id) => {
    setFlag(!flag);
    setEditSelected(id);
    setShowEditSubject(true);
  };

  const handleCloseSubjectAlumns = () => setShowSubjectAlumns(false);
  const handleShowSubjectAlumns = () => setShowSubjectAlumns(true);

  const editSubject = (id) => {
    setEditSelected(id);
    handleShowEditSubject();
  };

  let items = [];
  for (let number = 1; number <= Math.ceil(totalSubjects / 10); number++) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={() => setPage(number)}
        active={number === page}
      >
        {number}
      </Pagination.Item>
    );
  }

  const selectedS = (id) => {
    setSelectedSubject(id);
    handleShowSubjectAlumns();
    setGettingSubject(true);
  };

  useEffect(() => {
    if (subjects) {
      setIsLoading(false);
    }

    getSubjects();
  }, [page]);

  return (
    <>
      <div className="d-flex justify-content-between   my-3">
        <Pagination className="my-auto">{items}</Pagination>

        <button
          onClick={handleShowAddSubject}
          className="btn btn-success shadow  w-auto"
        >
          <HiDocumentAdd />
        </button>
      </div>
      <div>
        <Table className="table_subjects" responsive striped bordered hover>
          <thead>
            <tr>
              <th>Materia</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {subjects?.map((sub, index) => {
              return (
                <tr key={index}>
                  <td>
                    <span onClick={() => selectedS(sub._id)}>{sub.name}</span>
                  </td>
                  <td className="text-center">
                    <div className="d-flex">
                      <Button
                        className="button w-50 me-2 mt-0"
                        variant="warning mx-2"
                        onClick={() => handleShowEditSubject(sub._id)}
                      >
                        <AiFillEdit /> editar
                      </Button>
                      <Button
                        className="button w-50 mt-0"
                        variant="danger"
                        onClick={() => {
                          deleteSubject(sub._id);
                          getSubjects();
                        }}
                      >
                        <BsFillTrashFill /> eliminar
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      )}
      <AddModalSubject
        getSubjects={getSubjects}
        handleClose={handleCloseAddSubject}
        show={showAddSubject}
      />

      <EditModalSubjects
        subjectId={editSelected}
        handleClose={handleCloseEditSubject}
        show={showEditSubject}
      />

      <StudentsInSubjectsModal
        handleCloseSubjectAlumns={handleCloseSubjectAlumns}
        showSubjectAlumns={showSubjectAlumns}
        selectedSubject={selectedSubject}
        gettingSubject={gettingSubject}
      />
    </>
  );
};

export default SubjectTable;
