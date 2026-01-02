import { Container, Row, Col, Button } from "react-bootstrap";
import profilePic from "../img/profile_picture.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const AboutMe = () => {
  return (
    <section
      style={{
        background: "#f9fafb",
        padding: "100px 0",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Profile Image */}
          <Col
            xs={12}
            md={5}
            className="text-center mb-5 mb-md-0"
          >
            <img
              src={profilePic}
              alt="Alhassan Sahad"
              style={{
                width: "260px",
                height: "260px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Col>

          {/* Text Content */}
          <Col xs={12} md={7}>
            <h1
              style={{
                fontWeight: "800",
                fontSize: "2.6rem",
                marginBottom: "10px",
              }}
            >
              Alhassan Sahad
            </h1>

            <h2
              style={{
                fontSize: "1.3rem",
                fontWeight: "400",
                color: "#4b5563",
                marginBottom: "25px",
              }}
            >
              Data Scientist
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: "#374151",
                maxWidth: "650px",
              }}
            >
              I’m a Data Scientist with a strong foundation in statistics,
              machine learning, and applied AI. I design and build data-driven
              systems that transform complex data into clear insights and
              measurable real-world impact.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: "#374151",
                maxWidth: "650px",
              }}
            >
              My interests include end-to-end machine learning pipelines,
              experimentation, large language models (LLMs), and
              retrieval-augmented generation (RAG). I have a Masters degree in Data Science and Analytics from 
              the University of Missouri-Columbia.
            </p>
              <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: "#374151",
                maxWidth: "650px",
              }}
            >
              I currently work as a Data Scientist at Weyerhaeuser based in Seattle. Previous I worked as a 
              Data Scientist at NASA-Marshall Space Flight Center.
            </p>
            {/* Social Links */}
            <div className="mt-4 d-flex align-items-center gap-3">
              <a
                href="https://www.linkedin.com/in/alhassan-sahad-735a13160/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin size={32} color="#0A66C2" />
              </a>

              <a
                href="https://github.com/asahad"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={32} color="#111" />
              </a>

              <Button
                variant="dark"
                className="ms-3"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1anLxrDzrR9vTmD64fLP1FOKjupYqyL75/view",
                    "_blank"
                  )
                }
              >
                View Resume
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
