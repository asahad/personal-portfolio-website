import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import nucampsiteWebsiteImg from "../img/nucampWebsiteImage.jpg";
import TrackMyHuntImage from "../img/trackmyhunt.png";
import wineHubSiteImage from "../img/winehub.jpg";
import UsgsImage from "../img/usgsImage.png";
import ChicagoCrime from "../img/chicagoCrime.png";

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
      imageUrl: ChicagoCrime,
      title: "Chicago Crime ETL & Analytics",
      description:
        "End-to-end database design, ETL pipelines, and analytical workflows built on multi-year Chicago crime datasets.",
      projectGitHubUrl:
        "https://github.com/asahad/ETL-and-Analytics-on-Chicago-Crime-Data",
    },
    {
      imageUrl: wineHubSiteImage,
      title: "WineHub",
      description:
        "A full-stack e-commerce application built with React, Redux Toolkit, Node.js, Express, and MongoDB.",
      projectUrl: "https://winehubsite.onrender.com/",
      projectGitHubUrl: "https://github.com/asahad/winehubsite",
    },
    {
      imageUrl: TrackMyHuntImage,
      title: "TrackMyHunt",
      description:
        "A job application tracking platform built with React, Redux, and an Express-based backend.",
      projectUrl: "https://trackmyhunt.onrender.com",
      projectGitHubUrl: "https://github.com/asahad/TrackMyHunt",
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
    <section id="projects" style={{ padding: "80px 0" }}>
      <Container>
        <h2 style={{ fontWeight: "700", marginBottom: "40px" }}>
          Selected Projects
        </h2>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;