import React from "react";
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from "react-bootstrap";
import "./NavbarComponent.css"

const NavbarComponent = () => {
  return (
    <Navbar className="headerNav" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Link to="/login" className='text-beige nav-link'>Ingresar</Link> */}
          <Link to="/register" className='text-beige nav-link'>Registrar usuario</Link>
          
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
