import { useEffect, useState } from "react";
import { Table, Button, Alert } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import "./AdminTable.css";
import AddModalUsers from "../AddModalUsers/AddModalUsers";
import EditUserModal from "../EditUserModal/EditUserModal";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const AdminTable = () => {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  const { user, users, getUsers, deleteUser, error, setError } = useContext(UserContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseEdit = () => {
    setSelected(null);
    setShowEdit(false);
  };
  const handleShowEdit = (id) => {
    setSelected(id);
    setShowEdit(true);
  };

  useEffect(() => {
    getUsers();
    if (Object.keys(error).length != 0) {
      setTimeout(() => {
        setError({});
      }, 3000);
    }
  }, [error]);
  return (
    <>
      <div className="d-flex justify-content-end">
        <Button
          className="btn btn-success shadow my-2 w-auto"
          onClick={handleShow}
        >
          Registrar usuario
        </Button>
      </div>
      {Object.keys(error).length != 0
        ? Object.values(error).map((err, i) => (
            <div
              key={i}
              className="d-flex justify-content-center align-items-center"
            >
              <Alert variant="danger" className="mt-3 mb-0">
                {err}
              </Alert>
            </div>
          ))
        : null}
      <Table className="admin-table" responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Nombre completo</th>
            <th>Correo electrónico</th>
            <th>Número de teléfono</th>
            <th>Dirección</th>
            <th>Curso a cargo</th>
            <th>¿Usuario habilitado?</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.adress}</td>
              <td className="text-center">
                <ul>
                  {user.courseInCharge?.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </td>
              <td>{user.state ? "Habilitado" : "Deshabilitado"}</td>
              <td className="">
                <div className="d-flex align-items-start justify-content-center">
                  <Button
                    onClick={() => handleShowEdit(user._id)}
                    className="button w-50 me-2 mt-0"
                  >
                    <BiEditAlt />
                    editar
                  </Button>
                  <Button
                    onClick={() => deleteUser(user._id)}
                    className="button w-50 mt-0"
                  >
                    <AiFillDelete />
                    eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <AddModalUsers
        getUsers={getUsers}
        show={show}
        handleClose={handleClose}
      />
      <EditUserModal
        user={selected}
        getUsers={getUsers}
        show={showEdit}
        handleClose={handleCloseEdit}
      />
    </>
  );
};

export default AdminTable;
