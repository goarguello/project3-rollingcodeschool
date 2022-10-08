import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./NavbarComponent.css";
import { UserContext } from "../../context/UserContext";
import { BarsOutlined, HomeOutlined } from "@ant-design/icons";

const NavbarComponent = () => {
  const { logout } = useContext(UserContext);
  const { pathname } = useLocation();
  const { width } = useMediaQuery();
  const user = localStorage.getItem("token");

  return width < 768 ? (
    <Navbar className="headerNav" bg="light" variant="light" expand="lg">
      <Container>
        <div className="box-1">
          {pathname === "/" ? (
            <Navbar.Brand
            className="btn btn-one custom-button mx-auto"
            href="/"
          >
            <HomeOutlined />
          </Navbar.Brand>
          ) : (
            <Navbar.Brand
              className="btn btn-one custom-button mx-auto"
              href="/"
            >
              Inicio
            </Navbar.Brand>
          )}
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <BarsOutlined />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="d-flex flex-column justify-content-center align-items-end">
              {user ? (
                <>
                  <div className="box-3 mb-2">
                    <Link to="/admin" className="btn btn-three custom-button">
                      Admin
                    </Link>
                  </div>
                  <div className="box-3-logout ">
                    <Link
                      onClick={logout}
                      className="btn btn-three custom-button"
                    >
                      Cerrar sesión
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {pathname === "/login" ? (
                    ""
                  ) : (
                    <div className="box-3 mb-2">
                      <Link to="/login" className="btn btn-three custom-button">
                        Iniciar sesión
                      </Link>
                    </div>
                  )}
                  {pathname === "/register" ? (
                    ""
                  ) : (
                    <div className="box-3">
                      <Link
                        to="/register"
                        className="btn btn-three custom-button"
                      >
                        Registrarse
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <Navbar className="headerNav" bg="light" variant="light" expand="lg">
      <Container fluid>
        <div className="box-1 mx-3">
          {pathname === "/" ? (
            ""
          ) : (
            <Navbar.Brand
              className="btn btn-one custom-button mx-auto"
              href="/"
            >
              Inicio
            </Navbar.Brand>
          )}
        </div>
        <div>
          {user ? (
            <Nav className="me-auto">
              {/* <Link to="/login" className='text-beige nav-link'>Ingresar</Link> */}

              <div className="box-3 mx-3">
                <Link to="/admin" className="btn btn-three custom-button">
                  Admin
                </Link>
              </div>
              <div className="box-3-logout mx-3">
                <Link onClick={logout} className="btn btn-three custom-button">
                  Cerrar sesión
                </Link>
              </div>
            </Nav>
          ) : (
            <Nav className="me-auto">
              {pathname === "/register" ? (
                ""
              ) : (
                <div className="box-3 mx-3">
                  <Link to="/register" className="btn btn-three custom-button">
                    Registrar usuario
                  </Link>
                </div>
              )}
            </Nav>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
