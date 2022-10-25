import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import axiosConfig from "../config/axiosConfig";
import { AlumnsContext } from "../context/AlumnsContext";

const NormalStudentPage = () => {
  const { students, getStudents } = useContext(AlumnsContext);

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center">Página de Administración de Materias</h1>

      <Table className="table_subjects" responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Nombre completo</th>
            <th>Número de expediente</th>
            <th>Curso</th>
            <th>Cuota al día</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student, i) => (
            <tr className="text-center" key={i}>
              <td>{student.nameCompleted}</td>
              <td>{student._id}</td>
              <td>{student.curse}</td>
              <td>{student.cuoteDay ? "🟢" : "🟠"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default NormalStudentPage;
