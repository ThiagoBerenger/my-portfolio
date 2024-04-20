import React from 'react'

import {Navbar, Nav, Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.modules.css'

const Header = () => {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Formações</Nav.Link>
            <Nav.Link href="#features">Trabalhos</Nav.Link>
            <Nav.Link href="#pricing">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header