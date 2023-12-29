import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard"; // Make sure this path is correct

// Importing the project images
import nucampsiteWebsiteImg from "../img/nucampWebsiteImage.jpg";
import TrackMyHuntImage from "../img/trackmyhunt.png";
const ProjectsSection = () => {
  const projects = [
    {
      imageUrl: nucampsiteWebsiteImg,
      title: "NucampSite",
      description:
        "Full Stack single page application website for a fictitional camping site. This website provides user authentication to interact with the Directory portion of the site, users are able to add comments and hit the like button to the campsites after logging in or creating an account.",
      projectUrl: "https://react-deploy-test-383704.web.app/",
      projectGitHubUrl: "https://github.com/asahad/NucampSite",
    },
    {
      imageUrl: TrackMyHuntImage,
      title: "TrackMyHunt",
      description:
        "A job Application tracker for keeping records of jobs during job hunting.The front end was built using reac t and redux for state management.Built on top of Express JS for backend implementation",
      projectUrl: "",
      projectGitHubUrl: "https://github.com/asahad/TrackMyHunt",
    },

    // ... include other projects here ...
  ];

  return (
    <Container className="pt-5 pb-5">
      <h1 style={{ fontFamily: "Rubik", fontWeight: "900", lineHeight: "1em" }}>
        My Personal Projects
      </h1>
      <hr />
      <Row>
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="pb-3">
            <ProjectCard
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              projectUrl={project.projectUrl}
              projectGitHubUrl={project.projectGitHubUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsSection;
