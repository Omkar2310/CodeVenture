import React from 'react'
import {Navbar,Nav,NavDropdown, Container} from 'react-bootstrap';
const NavBar = () => (

<Navbar collapseOnSelect fixed='top' bg="primary" variant="dark" expand="sm">
  <Navbar.Brand href="#home">CodeVentures</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse  id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link  href="#home">Home</Nav.Link>
      <Nav.Link href="#link1">About</Nav.Link>
      <Nav.Link  href="#link2">Skills</Nav.Link>
      <Nav.Link  href="#link3">Project</Nav.Link>
      <Nav.Link href="#link4">Contact</Nav.Link>
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