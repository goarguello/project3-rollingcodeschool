import { Link } from "react-router-dom";
import CardComponent from "../components/CardComponent/CardComponent";

const AdminPage = () => {
    return ( 
<div className ="container d-flex justify-content-center align-items-center vh-100 flex-wrap" >
    <CardComponent img={"https://media.istockphoto.com/photos/teachers-in-the-hallway-picture-id641755258?b=1&k=20&m=641755258&s=170667a&w=0&h=ZEbcaHlNqhlKtwJQR1T3ELiI7t6i3JhyEjCyLZ278-o="} url={"/users-admin"} name={"Usuarios"} />
    <CardComponent img={"https://as2.ftcdn.net/v2/jpg/01/93/92/99/1000_F_193929975_aljh2eRP7pZ5MhnuO9R3WrbcEpQGkljB.jpg"} url={"/subject-admin"} name={"Materias"} />
    <CardComponent img={"https://media.istockphoto.com/photos/teenage-school-kids-smiling-to-camera-in-school-corridor-picture-id826212368?b=1&k=20&m=826212368&s=170667a&w=0&h=gYQ2zFTRSClCOoGI0P__MmDjFZZvQkKhcYC7_zDZefk="} url={"/students-admin"} name={"Alumnos"} />
    <CardComponent img={"https://media.istockphoto.com/photos/teenage-school-kids-smiling-to-camera-in-school-corridor-picture-id826212368?b=1&k=20&m=826212368&s=170667a&w=0&h=gYQ2zFTRSClCOoGI0P__MmDjFZZvQkKhcYC7_zDZefk="} url={"/isacepted"} name={"Habilitación"} />
    {/* <Link to='/isacepted'><button>Habilitar o inhabilitar usuarios</button></Link> */}
</div>
    );
}

export default AdminPage;