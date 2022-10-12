import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";

const EditAlForm = ({getStudents, handleCloseEdit, selected}) => {
    const [values, setValues] = useState({
        nameCompleted:'',
        curse:'',
        phone:'',
        address:''
    });
    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }
    const getStudent = async()=>{
        try {
            const response = await axiosConfig.get('/alumns/'+selected);
            setValues(response.data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(()=>{
        getStudent()
    },[]);

    const handleSubmit = async(e) =>{
        try {
            e.preventDefault();
            await axiosConfig.put('/alumns/'+selected,values)
            getStudents()
        } catch (error) {
            alert('Error al editar un alumno')
        }
    }

    return ( 
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control type="text" name="nameCompleted" onChange={handleChange} value={values.nameCompleted} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Curso</Form.Label>
        <Form.Control type="number" name="curse" onChange={handleChange} value={values.curse}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="number" name="phone" onChange={handleChange} value={values.phone} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Direccion</Form.Label>
        <Form.Control type="text" name="address" onChange={handleChange} value={values.address} />
      </Form.Group>
      
      <Button className="btn-alumns" variant="primary" type="submit" onClick={handleCloseEdit} >
        Editar
      </Button>
    </Form>
     );
}
 
export default EditAlForm;