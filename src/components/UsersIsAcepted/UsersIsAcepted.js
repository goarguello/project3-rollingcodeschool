import React, { useEffect, useState } from "react";
import "./UserIsAcepted.css";
import { Spinner, Table } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";

const UsersIsAcepted = () => {
  const [userIsAcepted, setUserIsAcepted] = useState([]);
  const [checkedState, setCheckedState] = useState(null);

  const getUsersIsAcepted = async () => {
    try {
      const users = await axiosConfig.get("/users/isacepted");
      setUserIsAcepted(users.data.users);
    } catch (error) {
      alert("Erros al traer los usuarios");
    }
  };

  useEffect(() => {
    getUsersIsAcepted();
  }, []);

  const handleClick = async (id, p, s) => {
    try {
      setCheckedState(s);
      await axiosConfig.put(`/users/${id}`, {
        state: !checkedState,
        password: p,
      });
      getUsersIsAcepted();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
                {console.log(user.password)}
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    onClick={() =>
                      handleClick(user._id, user.password, user.state)
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
