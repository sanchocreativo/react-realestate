import React from 'react'
import { Link } from "react-router-dom"
import ReactDOM from 'react-dom'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import '../styles.css'

class Navegador extends React.Component {

  render() {
    return (

      <Navbar collapseOnSelect className="text-dark py-4" expand="lg" bg="light" variant="dark">
        <Navbar.Brand className="text-dark bg-warning" href="#home"><Link to="/" exact>GRUPO KOWALSKI</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="pl-0 mr-lg-5" id="responsive-navbar-nav">
          <Nav className="ml-auto pl-0">
            <Nav.Link className="text-dark mr-lg-4" ><Link to="/">PROYECTOS</Link></Nav.Link>
            <Nav.Link className="text-dark mr-lg-4" ><Link to="/nosotros">NOSOTROS</Link></Nav.Link>
            <Nav.Link className="text-dark mr-lg-5" ><Link to="/contacto">CONTACTO</Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
  
}

export default Navegador;