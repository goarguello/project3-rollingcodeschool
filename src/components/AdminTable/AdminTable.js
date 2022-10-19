import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";
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
  const [users, setUsers] = useState([]);
  const { user } = useContext(UserContext)
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

  
  const deleteUser = async (id) => {
    try {
      if(user._id === id) return alert('No puedes Eliminarte a ti mismo')
      if (window.confirm("¿Estas seguro de eliminar el usuario?")) {
        await axiosConfig.delete(`/users/${id}`);
      }
      getUser();
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
    <div className="d-flex justify-content-end">

      <Button className="btn btn-success shadow my-3 w-auto" variant="primary" onClick={handleShow}>
        Registrar usuario
      </Button>
    </div>
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
              <td>{user.courseInCharge}</td>
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
