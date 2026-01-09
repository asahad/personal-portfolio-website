
import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar shadow-sm">
      <Container>
        <Navbar.Brand href="#top" className="navbar-brand-text">
          Alhassan Sahad
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#top" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
