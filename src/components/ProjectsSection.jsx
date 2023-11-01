import React, { useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Modal,
  Button,
  Image,
} from "react-bootstrap";
import nucampsiteWebsiteImg from "../img/nucampWebsiteImage.jpg";
import blogAppWebsiteImg from "../img/blogAppWebsiteImg.jpg";
import summitBankWebsiteImg from "../img/summitBankWebsiteImg.jpg";
import budgetPlanningWebsiteImg from "../img/budgetPlannerWebsiteImg.jpg";
import SummitBankCCImg from "../img/SummitBankCC.png";
import SummitBankHomeImg from "../img/SummiytBankHome.png";
import SummitBankCheckingImg from "../img/SummitBankChecking.png";
import SummitBankRetirementImg from "../img/SummitBankRetirement.png";
import manixTintingImg from "../img/manixTintingWebsiteImg.jpg";
import techTempleImg from "../img/techTempleImg.jpg";

const ProjectsSection = () => {
  const [showWarningModal, setShowWarningModal] = useState(false);

  const openModal = () => {
    setShowWarningModal(true);
  };

  const closeModal = () => {
    setShowWarningModal(false);
  };

  const [showBankImgsModal, setShowBankImgsModal] = React.useState(false);

  const openBankImgsModal = () => {
    setShowBankImgsModal(true);
  };

  const closeBankImgsModal = () => {
    setShowBankImgsModal(false);
  };

  return (
    <Container className="pt-5 pb-5">
      <h1>Projects</h1>
      <hr />
      <Row>
        <Col xs={12} md={6} className="pb-3">
          <Card className="custom-project-card">
            <a
              href="https://react-deploy-test-383704.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                src={nucampsiteWebsiteImg}
                alt="nucampsite website thumbnail"
              />
            </a>
            <Card.Body style={{ minHeight: "250px" }}>
              <hr />
              <Card.Title>Nucamp Website</Card.Title>
              <Card.Text>
                Full Stack single page application website for a fictitional
                camping site. This website provides user authentication to
                interact with the Directory portion of the site, users are able
                to add comments and hit the like button to the campsites after
                loggin in or creating an account.
              </Card.Text>
              <a
                href="https://react-deploy-test-383704.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Go to Project</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsSection;
