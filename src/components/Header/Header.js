import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Quiz Buzz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className=" ms-auto ">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/quiz">Quiz</Nav.Link> */}
            <Nav.Link href="/chart">Chart</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            {/* <Nav.Link href="/about">About</Nav.Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;