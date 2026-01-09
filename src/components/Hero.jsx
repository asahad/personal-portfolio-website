
import { Container, Row, Col, Button } from "react-bootstrap";
import profilePic from "../img/profile_picture.jpg";
// Import icons (assumes react-icons is installed)
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <section id="top" className="hero-section">
      <Container>
        <Row className="align-items-center">
          {/* Profile Image Column */}
          <Col 
            xs={12} md={5} 
            className="text-center text-md-start mb-5 mb-md-0" 
            data-aos="fade-right" data-aos-duration="800"
          >
            <img
              src={profilePic}
              alt="Alhassan Sahad"
              className="profile-img"
            />
          </Col>

          {/* Text Content Column */}
          <Col 
            xs={12} md={7} 
            className="hero-text" 
            data-aos="fade-left" data-aos-duration="800"
          >
            <h1 className="hero-title">Alhassan Sahad</h1>
            <h2 className="hero-subtitle">Data Scientist</h2>
            <p className="hero-description">
              I’m a Data Scientist with a strong foundation in statistics,
              machine learning, and applied AI. I design and build data‑driven
              systems that transform complex data into clear insights and 
              measurable real‑world impact.
            </p>
            <p className="hero-description">
              My interests include end-to-end machine learning pipelines,
              experimentation, large language models (LLMs), and retrieval-augmented
              generation (RAG). I have a Masters degree in Data Science and Analytics 
              from the University of Missouri-Columbia and a Bachelors in Engineering 
              from the Kwame Nkrumah University of Science and Technology, Ghana.
            </p>
            <p className="hero-description">
              I currently work as a Data Scientist at Weyerhaeuser, based in Seattle. 
              Previously, I worked as a Data Scientist at NASA Marshall Space Flight Center.
            </p>
            {/* Social Links and Resume Button */}
            <div className="mt-4 d-flex align-items-center flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/alhassan-sahad-735a13160/" target="_blank" rel="noreferrer" className="social-link">
                <BsLinkedin size={32} />
              </a>
              <a href="https://github.com/asahad" target="_blank" rel="noreferrer" className="social-link">
                <BsGithub size={32} />
              </a>
              <a href="mailto:asahad@example.com" className="social-link">
                <AiOutlineMail size={32} />
              </a>
              <Button 
                variant="dark" 
                className="ms-0 ms-md-3 mt-3 mt-md-0" 
                onClick={() => window.open("https://drive.google.com/file/d/1anLxrDzrR9vTmD64fLP1FOKjupYqyL75/view", "_blank")}
              >
                View Résumé
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
