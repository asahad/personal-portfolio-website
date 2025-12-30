import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "./SkillCard";

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
    <section id="skills" style={{ padding: "80px 0", background: "#fafafa" }}>
      <Container>
        <h2 style={{ fontWeight: "700", marginBottom: "40px" }}>
          Skills
        </h2>

        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col key={index} xs={4} sm={3} md={2}>
              <SkillCard {...skill} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;