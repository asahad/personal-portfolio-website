import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from './SkillCard'; // Adjust the import path as needed

// Importing the logos
import jsLogo from '../img/JSLogo.png';
import reactLogo from '../img/reactLogo.png';
import firebaseLogo from '../img/firebaseLogo.png';
import htmlLogo from '../img/htmlLogo.png';
import cssLogo from '../img/css-logo.png';
import reduxLogo from '../img/ReduxImg.png';
import gcpLogo from '../img/gcpLogo.png';
import gitLogo from '../img/gitLogo.png';
import npmLogo from '../img/npmLogo.png';
import bootstrapLogo from '../img/bootstrapImg.png';
import pythonLogo from '../img/PythonImg.png';
import sqlLogo from '../img/sqlImage.png';

const SkillsSection = () => {
  // Array of skills
  const skills = [
    { image: jsLogo, title: 'JavaScript' },
    { image: reactLogo, title: 'React' },
    { image: bootstrapLogo, title: 'Bootstrap' },
    { image: cssLogo, title: 'CSS' },
    { image: sqlLogo, title: 'SQL' },
    { image: htmlLogo, title: 'HTML' },
    { image: firebaseLogo, title: 'Firebase' },
    { image: gitLogo, title: 'Git' },
    { image: gcpLogo, title: 'GCP' },
    { image: npmLogo, title: 'NPM' },
    { image: reduxLogo, title: 'Redux' },
    { image: pythonLogo, title: 'Python' },
  ];

  return (
    <Container className="pt-5" id="Skills">
      <h1 style={{ fontFamily: 'Rubik', fontWeight: '900', lineHeight: '1em' }}>
        My Skills
      </h1>
      <hr />
      <Row>
        {skills.map((skill, index) => (
          <Col key={index} xs={6} sm={6} md={4} lg={3} xl={2}>
            <SkillCard image={skill.image} title={skill.title} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillsSection;
