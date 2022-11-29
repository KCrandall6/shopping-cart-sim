import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

const NavBarMenu = ({itemsAmount, setItemsAmount}) => {

  useEffect(() => {
    const num = JSON.parse(window.localStorage.getItem('state'));
    setItemsAmount(num? num.length : 0);
  })

  return (
    <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Shopping Cart Simulator</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link className="position-absolute top-50 end-0 translate-middle border text-light rounded bg-info bg-gradient" href="/mycart"> My Cart            
            <Badge className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-danger">{itemsAmount}</Badge>
            <span className="visually-hidden"></span>
            </Nav.Link>
          </Nav>
        </Container>

      </Navbar>
    </>
  );
}

export default NavBarMenu;