import { Card, Button } from "react-bootstrap";

const ProjectCard = ({
  imageUrl,
  title,
  description,
  projectUrl,
  projectGitHubUrl,
}) => {
  return (
    <Card className="mb-3" style={{ minHeight: "500px" }}>
      {" "}
      {/* Set a specific height */}
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body style={{ overflowY: "auto" }}>
        {" "}
        {/* Add scroll for overflow */}
        <Card.Title style={{ fontSize: "30px" }}>{title}</Card.Title>
        <Card.Text
          style={{
            // maxHeight: "100px",
            // overflow: "hidden",
            // textOverflow: "ellipsis",
            minHeight: "215px",
            textAlign: "justify",
          }}
        >
          {description}
        </Card.Text>
        <div className="mt-auto">
          {" "}
          {/* Buttons aligned to bottom */}
          <Button
            variant="primary"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </Button>{" "}
          <Button
            variant="secondary"
            href={projectGitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
