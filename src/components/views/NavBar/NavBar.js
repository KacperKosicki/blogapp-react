import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
      <Navbar.Brand className={styles.navbarBrand}>BlogApp</Navbar.Brand>
      <div className="flex-grow-1"></div>
      <Nav className={styles.navbarLinks}>
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;