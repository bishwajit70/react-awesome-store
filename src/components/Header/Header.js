import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

import './Header.css'

const Header = (props) => {

    return (
        <div className='container-fluid'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Fake Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <Nav.Link href="#link">Shop</Nav.Link>
                            <Nav.Link href="#link">Cart <sup>{props.count}</sup></Nav.Link>
                            <Nav.Link href="#link">Sign Up</Nav.Link>
                            <Nav.Link href="#link">Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;