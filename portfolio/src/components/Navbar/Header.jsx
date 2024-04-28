import React, { useRef } from 'react';

import { Link } from 'react-router-dom';

import './Header.modules.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaConnectdevelop } from "react-icons/fa";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Header = () => {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('navbar_dropdown')
  }

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
            <button className="hamburger" onClick={showNavbar}></button>
        </Container>
      </Navbar>
      <div className="hidden-navbar" ref={navRef}>
          <div className="navbar_dropdown-link"><Link to='/'>Home</Link></div>
          <div className="navbar_dropdown-link"><Link to="/habilidades">Habilidades</Link></div>
          <div className="navbar_dropdown-link"><Link to="#projetos">Projetos</Link></div>
          <div className="navbar_dropdown-link"><Link to="#contato">Contato</Link></div>
      </div>
    </>
  )
}

export default Header