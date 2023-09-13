import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact-section-background" id="contact">
      <Container className="pt-5 ">
        <Row className="justify-content-center">
          <Col md={6}>
            {" "}
            {/* Set the horizontal length of the form */}
            <h1 className="text-center">Contact</h1>
            <Form onSubmit={handleSubmit} className="m-2">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your message..."
                />
              </Form.Group>

              <div className="text-center">
                {" "}
                {/* Center the button */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
