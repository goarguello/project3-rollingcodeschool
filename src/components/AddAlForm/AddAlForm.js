import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";

const AddAlForm = ({getStudents, handleCloseAdd}) => {
    const [values, setValues] = useState({
        nameCompleted:'',
        curse:'',
        phone:0,
        adress:''
    });
    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async(e) =>{
        try {
            e.preventDefault();
            const response = await axiosConfig.post('/alumns',values)
            console.log(response);
            getStudents()
        } catch (error) {
            alert('Error al cargar un nuevo alumno')
            console.log(error);
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
        <Form.Control type="text" name="curse" onChange={handleChange} value={values.curse} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="number" name="phone" onChange={handleChange} value={values.phone} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Direccion</Form.Label>
        <Form.Control type="text" name="adress" onChange={handleChange} value={values.adress} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleCloseAdd} >
        Agregar
      </Button>
    </Form>
     );
}
 
export default AddAlForm;