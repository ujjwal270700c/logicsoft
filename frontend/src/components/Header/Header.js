import React from 'react'
import {Navbar ,Nav,Container} from 'react-bootstrap/'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to={"/"}>Logicsoft</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
      <Nav.Link as={Link} to={"/profile"}>Profile</Nav.Link>
    
    </Nav>
   <Nav>
      <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
      <Nav.Link  as={Link} to={"/signup"}>
        Signup
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
