import { Container, Row, Col, Button } from "react-bootstrap";
import profilePic from "../img/profile_picture.jpg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const AboutMe = () => {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col
          xs={12}
          lg={4}
          className="text-center mb-4 mb-md-0"
          style={{ paddingLeft: "10%" }}
        >
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: "50%",
              margin: "0 auto",
            }}
          />
        </Col>
        <Col xs={12} lg={4} className="text-left">
          <h1 className="mb-5" style={{ fontFamily: 'Rubik', fontWeight: '900', lineHeight: '1em' }}>About Me</h1>
          <div className="about-me" style={{ textAlign: "left" }}>
            <p style={{ margin: "0", padding: "0", fontSize: "20px" }}>
              I like to use code to solve real-life problems.I a am masters
              student in Data Science and Analytics at the University of
              Missouri and I will be graduating in May 2024.
            </p>
          </div>
          <div className="social-and-resume mt-4" style={{ textAlign: "left" }}>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/alhassan-sahad-735a13160/"
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: "20px" }}
            >
              <BsLinkedin style={{ fontSize: "40px", color: "#007FFF " }} />
            </a>
            <a
              className="social-link"
              href="https://github.com/asahad"
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: "20px" }}
            >
              <BsGithub style={{ fontSize: "40px", color: "black" }} />
            </a>
            <a
              className="social-link"
              type="email"
              href="mailto:sahadalhassan96@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: "20px" }}
            >
              <AiOutlineMail style={{ fontSize: "40px", color: "#007FFF" }} />
            </a>

            <Button
              variant="primary"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1pArVwfg0V3A8p0fTRFWdlaqfK3zCnRL6/view?usp=drive_link",
                  "_blank"
                )
              }
            >
              Resume
            </Button>
          </div>
        </Col>
        <Col lg={4} className="d-none d-lg-block">
          {/* Empty or additional content */}
        </Col>
      </Row>
    </Container>
  );
};
export default AboutMe;
