import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: "#F2F2F2", padding: "20px 0" }}>
      <Container>
        <Row>
          <Col className="text-center">
            <p style={{ fontSize: "22px" }}>
              Copyright &copy; {currentYear} All Rights Reserved,Designed by
              Alhassan.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
