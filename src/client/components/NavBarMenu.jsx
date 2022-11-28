import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarMenu = () => {
  return (
    <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Shopping Cart Simulator</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link className="position-absolute top-50 end-0 translate-middle border text-light rounded bg-info bg-gradient" href="/mycart">My Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarMenu;