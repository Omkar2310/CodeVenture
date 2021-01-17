import React from 'react'
import {Navbar,Nav,NavDropdown, Container} from 'react-bootstrap';
import './navbar.styles.css'

const NavBar = () => (

<Navbar className="color-nav" collapseOnSelect fixed='top' bg="black" variant="dark" expand="xl">
  <Navbar.Brand className="brand-color" href="#home">CodeVentures</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse  id="basic-navbar-nav">
    <Nav className="mx-auto justify-content-between">
      <Nav.Link  href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link  href="#skills">Skills</Nav.Link>
      <Nav.Link  href="#projects">Project</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>

)

export default NavBar;