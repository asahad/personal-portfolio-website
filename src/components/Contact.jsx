import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://personal-portfolio-backend-s3en.onrender.com/api/form-submission",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully!");
        // Clear form here
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to submit form.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="contact-section-background" id="contact">
      <ToastContainer />
      <Container className="pt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h1
              className="text-center"
              style={{
                fontFamily: "Rubik",
                fontWeight: "900",
                lineHeight: "1em",
              }}
            >
              Contact Me
            </h1>
            <Form onSubmit={handleSubmit} className="m-2">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                  value={formData.name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your message..."
                  onChange={handleInputChange}
                  value={formData.message}
                />
              </Form.Group>

              <div className="text-center">
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
