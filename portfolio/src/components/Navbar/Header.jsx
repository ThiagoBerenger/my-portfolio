import React from 'react'

import './Header.modules.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaConnectdevelop } from "react-icons/fa";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <FaConnectdevelop />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/habilidades">Habilidades</Nav.Link>
            <Nav.Link href="#projetos">Projetos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header