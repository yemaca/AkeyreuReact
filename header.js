// Header.js
import React from 'react';
import './header.css';
import { Navbar, Nav } from 'react-bootstrap';
import logoImage from './WebsiteImages/Logo(b)Insta.png';

function Header() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src={logoImage}
          alt="Akeyreu Logo"
          style={{ width: '150px', height: 'auto' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;