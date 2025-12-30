import { Container, Row, Col, Button } from "react-bootstrap";
import profilePic from "../img/profile_picture.jpg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const AboutMe = () => {
  return (
    <Container fluid className="py-5">
      <Row className="align-items-center">
        {/* ===== Profile Image ===== */}
        <Col
          xs={12}
          lg={5}
          className="text-center mb-5 mb-lg-0"
        >
          <img
            src={profilePic}
            alt="Alhassan Sahad"
            style={{
              width: "100%",
              maxWidth: "380px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Col>

        {/* ===== About Text ===== */}
        <Col xs={12} lg={6}>
          <h1
            className="mb-4"
            style={{
              fontFamily: "Rubik",
              fontWeight: "900",
              lineHeight: "1.1",
            }}
          >
            About Me
          </h1>

          <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
            I’m a Data Scientist with a strong foundation in statistics,
            machine learning, and applied AI. I enjoy building systems that
            transform raw data into insights that drive real-world decisions.
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
            My interests span end-to-end machine learning, experimentation,
            and modern AI workflows including large language models (LLMs)
            and retrieval-augmented generation (RAG). I value clarity,
            reproducibility, and impact in everything I build.
          </p>

          {/* ===== Social Links + Resume ===== */}
          <div className="d-flex align-items-center mt-4 flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/alhassan-sahad-735a13160/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BsLinkedin style={{ fontSize: "34px", color: "#0A66C2" }} />
            </a>

            <a
              href="https://github.com/asahad"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <BsGithub style={{ fontSize: "34px", color: "#000" }} />
            </a>

            <a
              href="mailto:sahadalhassan96@gmail.com"
              aria-label="Email"
            >
              <AiOutlineMail style={{ fontSize: "36px", color: "#0A66C2" }} />
            </a>

            <Button
              variant="primary"
              className="ms-lg-3"
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
  );
};

export default AboutMe;
