
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

// Import project images
import nucampsiteWebsiteImg from "../img/nucampWebsiteImage.jpg";
import trackMyHuntImage from "../img/trackmyhunt.png";
import wineHubSiteImage from "../img/winehub.jpg";
import UsgsImage from "../img/usgsImage.png";
import ChicagoCrimeImage from "../img/chicagoCrime.png";

const ProjectsSection = () => {
  const projects = [
    {
      imageUrl: UsgsImage,
      title: "Streamflow Monitor",
      description:
        "A web application for visualizing and monitoring streamflow data across U.S. gauge stations, with a focus on Missouri.",
      projectUrl: "https://streamflow-monitor.onrender.com/",
      projectGitHubUrl: "https://github.com/asahad/streamflow-monitor",
    },
    {
      imageUrl: ChicagoCrimeImage,
      title: "Chicago Crime ETL & Analytics",
      description:
        "End-to-end database design, ETL pipelines, and analytical workflows built on multi-year Chicago crime datasets.",
      projectUrl: null,
      projectGitHubUrl:
        "https://github.com/asahad/ETL-and-Analytics-on-Chicago-Crime-Data",
    },
    {
      imageUrl: wineHubSiteImage,
      title: "WineHub E-commerce",
      description:
        "A full-stack e-commerce application built with React, Redux Toolkit, Node.js, Express, and MongoDB.",
      projectUrl: "https://winehubsite.onrender.com/",
      projectGitHubUrl: "https://github.com/asahad/winehubsite",
    },
    {
      imageUrl: nucampsiteWebsiteImg,
      title: "NucampSite",
      description:
        "A full-stack single-page application featuring authentication, comments, and user interaction.",
      projectUrl: "https://react-deploy-test-383704.web.app/",
      projectGitHubUrl: "https://github.com/asahad/NucampSite",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          Sample Projects
        </h2>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col 
              key={index} xs={12} md={6} lg={4} 
              data-aos="fade-up" data-aos-delay={index * 100}
            >
              <ProjectCard {...project} className="custom-project-card" />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;
