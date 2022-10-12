
import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axiosConfig from '../../config/axiosConfig';
import { AiFillDelete } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import './AdminTable.css' 
import AddModalUsers from '../AddModalUsers/AddModalUsers';


const AdminTable = () => {
    const [show, setShow] = useState(false);
    const [users, setUser]= useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const getUser =async () =>{
        try {
            const response = await axiosConfig.get("/users/")
            setUser(response.data.users)
        } catch (error) {
            alert("No hay Usuarios")
        }
    }
    useEffect(()=>{
        getUser()
    },[])
    console.log(users);
    return ( 
        <>
        <Button className='button' variant="primary" onClick={handleShow}>
        Launch demo modal
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
                {users?.map(user=>(
                    <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.adress}</td>
                    <td>{user.courseInCharge}</td>
                    <td>{user.state?"Habilitado":"Deshabilitado"}</td>
                    <td className='text-center'>
                        <button variant= "primary" className='me-2'><BiEditAlt className='border-text'/></button>
                        <button variant= "warning"><AiFillDelete/></button>
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
        <AddModalUsers show={show} handleClose={handleClose}/>
    </>
    );
}
 
export default AdminTable;