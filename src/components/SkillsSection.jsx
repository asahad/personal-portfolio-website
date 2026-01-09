
import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "./SkillCard";

// Import skill logos
import jsLogo from "../img/JSLogo.png";
import reactLogo from "../img/reactLogo.png";
import htmlLogo from "../img/htmlLogo.png";
import cssLogo from "../img/css-logo.png";
import reduxLogo from "../img/ReduxImg.png";
import gcpLogo from "../img/gcpLogo.png";
import gitLogo from "../img/gitLogo.png";
import npmLogo from "../img/npmLogo.png";
import bootstrapLogo from "../img/bootstrapImg.png";
import pythonLogo from "../img/PythonImg.png";
import sqlLogo from "../img/sqlImage.png";

const SkillsSection = () => {
  const skills = [
    { image: pythonLogo, title: "Python" },
    { image: sqlLogo, title: "SQL" },
    { image: jsLogo, title: "JavaScript" },
    { image: reactLogo, title: "React" },
    { image: reduxLogo, title: "Redux" },
    { image: bootstrapLogo, title: "Bootstrap" },
    { image: htmlLogo, title: "HTML" },
    { image: cssLogo, title: "CSS" },
    { image: gitLogo, title: "Git" },
    { image: npmLogo, title: "NPM" },
    { image: gcpLogo, title: "GCP" },
  ];

  return (
    <section id="skills" className="section-container light-bg">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          Skills
        </h2>
        <Row className="g-4 justify-content-center">
          {skills.map((skill, index) => (
            <Col 
              key={index} xs={4} sm={3} md={2} 
              className="text-center" 
              data-aos="zoom-in" data-aos-delay={index * 100}
            >
              <SkillCard {...skill} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
