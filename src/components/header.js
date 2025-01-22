import React from 'react';
import './header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logoImage from './../assets/Logo.png';

function Header() {
  const navigate = useNavigate();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    // Navigate to the main page first
    if (window.location.pathname !== '/') {
      navigate('/', { replace: false }); // Navigate to the main page
    }

    // Scroll to the target section after navigation
    setTimeout(() => {
      const target = document.getElementById(targetId);

      if (target) {
        const yOffset = -100; // Offset for the height of the navbar
        const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: yPosition,
          behavior: 'smooth', // Smooth scrolling
        });
      }
    }, 100); // Small delay to ensure navigation completes
  };

  return (
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand href="/#home" onClick={(e) => handleNavClick(e, 'home')}>
        <img
          src={logoImage}
          alt="Akeyreu Logo"
          style={{ width: '150px', height: 'auto' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/#home" onClick={(e) => handleNavClick(e, 'home')}>Home</Nav.Link>
          <Nav.Link href="/#about" onClick={(e) => handleNavClick(e, 'about')}>About</Nav.Link>
          <Nav.Link href="/#values" onClick={(e) => handleNavClick(e, 'values')}>Our Values</Nav.Link>
          <Nav.Link href="/#products" onClick={(e) => handleNavClick(e, 'products')}>Products</Nav.Link>
          <Nav.Link href="/#learn-more" onClick={(e) => handleNavClick(e, 'learn-more')}>Learn More</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="https://ajr2.github.io/RoamingMinds/" rel="noopener noreferrer">Podcast</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;