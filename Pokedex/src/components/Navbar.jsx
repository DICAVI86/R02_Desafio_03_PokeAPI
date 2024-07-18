import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function NavBar() {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
   <Navbar 
   className='navbar'
    bg="dark" 
    variant="dark" 
    expand="lg">
        <Navbar.Brand href="/">POKEDEX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto alignMenu">
                <Nav.Link as={NavLink} to="/" exact="true" className={setActiveClass}>
                Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/pokemones" className={setActiveClass}>
                Pokemones
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
   </Navbar>
  );
};

export default NavBar