import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import "./AdminTable.css";
import AddModalUsers from "../AddModalUsers/AddModalUsers";
import EditUserModal from "../EditUserModal/EditUserModal";

const AdminTable = () => {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  const [users, setUsers] = useState([]);
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

  const getUser = async () => {
    try {
      const response = await axiosConfig.get("/users/");
      setUsers(response.data.users);
    } catch (error) {
      alert("No hay Usuarios");
    }
  };



  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Button className="button" variant="primary" onClick={handleShow}>
        Registrar usuario
      </Button>
      <Button className="button" variant="primary" onClick={handleShowEdit}>
        Modificar usuario
      </Button>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre completo</th>
            <th>Correo electrónico</th>
            <th>Número de teléfono</th>
            <th>Dirección</th>
            <th>Curso a cargo</th>
            <th>¿Usuario habilitado?</th>
            <th>aciones</th>
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
              <td>{user.courseInCharge}</td>
              <td>{user.state ? "Habilitado" : "Deshabilitado"}</td>
              <td className="text-center">
                <button variant="primary" className="me-2">
                  <BiEditAlt
                    onClick={() => handleShowEdit(user._id)}
                    className="fs-3"
                  />
                </button>
                <button variant="warning">
                  <AiFillDelete className="fs-3" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddModalUsers getUser={getUser} show={show} handleClose={handleClose} />
      <EditUserModal
        user={selected}
        getUser={getUser}
        show={showEdit}
        handleClose={handleCloseEdit}
      />
    </>
  );
};

export default AdminTable;
