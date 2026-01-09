
import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://personal-portfolio-backend-s3en.onrender.com/api/form-submission",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to submit form.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <section id="contact" className="section-container light-bg">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="section-title text-center" data-aos="fade-up">
              Contact Me
            </h2>
            <Form onSubmit={handleSubmit} className="mt-4" data-aos="fade-up" data-aos-delay="200">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={handleInputChange} 
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleInputChange} 
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" rows={4} 
                  placeholder="Your message..." 
                  value={formData.message}
                  onChange={handleInputChange} 
                  required 
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
        {/* ToastContainer renders the toast notifications */}
        <ToastContainer position="top-center" pauseOnHover theme="colored" />
      </Container>
    </section>
  );
};

export default ContactForm;
