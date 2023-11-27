import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./HomeNavbar.css";
import Contact from "../Contact";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="CustomNavbar fixed-top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/images/logo.png"
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="My logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#certificates">Certificates</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="justify-content-end">
          <Contact />
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
