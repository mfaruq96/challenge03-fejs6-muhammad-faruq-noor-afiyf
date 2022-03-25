import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


export const NavbarDefault = () => {
    return (
        <div>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="product">Product</Nav.Link>
                            <Nav.Link href="galery">Galery</Nav.Link>
                            <Nav.Link href="contactus">Contact Us</Nav.Link>
                            <Nav.Link href="aboutus">About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
