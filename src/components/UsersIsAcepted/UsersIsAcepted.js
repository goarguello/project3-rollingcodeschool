import React, { useContext, useEffect, useState } from "react";
import "./UserIsAcepted.css";
import { Alert, Spinner, Table } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";
import { UserContext } from "../../context/UserContext";

const UsersIsAcepted = () => {
  const [userIsAcepted, setUserIsAcepted] = useState([]);
  const [checkedState, setCheckedState] = useState(null);
  const [error, setError] = useState({});
  const { user } = useContext(UserContext);

  const getUsersIsAcepted = async () => {
    try {
      const users = await axiosConfig.get("/users/isacepted");
      setUserIsAcepted(users.data.users);
    } catch (error) {
      alert("Error al traer los usuarios");
    }
  };

  const handleClick = async (id, s) => {
    try {
      setCheckedState(s);
      if (user._id === id) {
        setError({ message: "No puedes inhabilitar tu usuario" });
      } else {
        await axiosConfig.put(`/users/${id}`, {
          state: !checkedState,
        });
        getUsersIsAcepted();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersIsAcepted();
    if (Object.keys(error).length != 0) {
      setTimeout(() => {
        setError({});
      }, 3000);
    }
  }, [error]);

  return (
    <div>
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
      <Table className="table_userIsAcepted" responsive striped bordered hover>
        <thead>
          <tr>
            <th>USUARIO</th>
            <th>EMAIL</th>
            <th>HABILITADO</th>
          </tr>
        </thead>
        <tbody>
          {userIsAcepted?.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    // onChange={(e)=> handleChange(e,user._id, user.password, user.state)}
                    onChange={() =>
                      handleClick(user._id, user.state)
                    }
                    checked={user.state ? true : false}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {userIsAcepted.length === 0 && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
};

export default UsersIsAcepted;
