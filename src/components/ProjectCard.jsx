import { Card, Button } from "react-bootstrap";

const ProjectCard = ({
  imageUrl,
  title,
  description,
  projectUrl,
  projectGitHubUrl,
}) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={title}
        style={{ height: "180px", objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontSize: "1.2rem", fontWeight: "600" }}>
          {title}
        </Card.Title>

        <Card.Text
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.6",
            color: "#444",
          }}
        >
          {description}
        </Card.Text>

        <div className="mt-auto d-flex gap-2">
          {projectUrl && (
            <Button
              size="sm"
              variant="dark"
              href={projectUrl}
              target="_blank"
            >
              Live
            </Button>
          )}

          <Button
            size="sm"
            variant="outline-dark"
            href={projectGitHubUrl}
            target="_blank"
          >
            Code
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
