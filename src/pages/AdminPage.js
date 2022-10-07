import CardComponent from "../components/CardComponent/CardComponent";

const AdminPage = () => {
    return ( 
<div className ="container d-flex justify-content-center align-items-center vh-100" >
    <CardComponent img={"https://cdn-icons-png.flaticon.com/512/3135/3135768.png"} name={"Usuarios"} />
    <CardComponent img={"https://cdn-icons-png.flaticon.com/512/3135/3135816.png"} name={"Materias"} />
    <CardComponent img={"https://cdn-icons-png.flaticon.com/512/3135/3135810.png"} name={"Alumnos"} />
</div>
    );
}

export default AdminPage;