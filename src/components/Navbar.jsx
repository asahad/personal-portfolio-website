import { Navbar, Nav, Container } from "react-bootstrap";
const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: "auto" }}>
            <Nav.Link href="#header" >
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link href="#Skills" style={{ marginLeft: "50px" }}>
              <h4 className="ml-5">Skills</h4>
            </Nav.Link>
            <Nav.Link href="#projects" style={{ marginLeft: "50px" }}>
              <h4>Projects</h4>
            </Nav.Link>
            <Nav.Link href="#contact" style={{ marginLeft: "50px" }}>
              <h4>Contact</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
