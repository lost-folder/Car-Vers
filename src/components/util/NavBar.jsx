import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Container} from 'react-bootstrap'
import logo from '../../../public/images/logo.png'
const NavBar = () => {
  return (
      <Navbar className="nav" expand="lg">
      <Container>
        <Navbar.Brand href="/">
       AUTO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft:"auto", marginRight:"auto"}} className="me-auto ">
            <Nav.Link className='link' href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#link">Models</Nav.Link>
            <Nav.Link href="#link">Testimonials</Nav.Link>
            <Nav.Link href="#link">Our Team</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Button style={{color:"red"}}>
                Sign in
            </Button>
            <Button style={{backgroundColor:"red" ,color:"white"}}>
                Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar