import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import axiosConfig from '../../config/axiosConfig'

const UsersIsAcepted = () => {
  const [userIsAcepted, setUserIsAcepted] = useState([])
  const [checkedState, setCheckedState] = useState(null)
  
  const getUsersIsAcepted = async () => {
    try {
      const users = await axiosConfig.get('/users/isacepted')
      setUserIsAcepted(users.data.users);
      console.log(users.data.users);
    } catch (error) {
      alert('Erros al traer los usuarios')
    }
  }
  useEffect(() => {
    getUsersIsAcepted()
  }, [])
  
   const handleClick = async (id, p, s) => {
    try {
      setCheckedState(s)
      console.log("PASSWORD",p)
      const userU = await axiosConfig.put(`/users/${id}`, {state: !checkedState , password: p})
      console.log(userU);
       getUsersIsAcepted()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Email</th>
            <th>Aceptar</th>
          </tr>
        </thead>
        <tbody>
           {
            userIsAcepted?.map((user, index) =>  {
              return <tr key={index}>
                {console.log(user.password)}
                      <td>{user.name}</td> 
                      <td>{user.email}</td>
                      <td><input type='checkbox' onChange={() => handleClick(user._id, user.password, user.state)} checked={user.state? true: false}/></td>
                     </tr>
            })
          } 
        </tbody>
      </Table>
    </div>
  )
}

export default UsersIsAcepted
                       
                        
                       