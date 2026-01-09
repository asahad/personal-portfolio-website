
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ imageUrl, title, description, projectUrl, projectGitHubUrl, className }) => {
  return (
    <Card className={`h-100 shadow-sm ${className || ""}`}>
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
        <Card.Text style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#374151", flexGrow: 1 }}>
          {description}
        </Card.Text>
        <div className="mt-3 d-flex gap-2 align-items-center">
          {projectUrl && (
            <Button 
              size="sm" variant="outline-primary" 
              href={projectUrl} target="_blank" rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          )}
          <Button 
            size="sm" variant="outline-dark" 
            href={projectGitHubUrl} target="_blank" rel="noopener noreferrer"
          >
            View Code
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
