import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ imageUrl, title, description, projectUrl, projectGitHubUrl }) => {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title style={{fontSize: "30px"}}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={projectUrl} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
        {' '}
        <Button variant="secondary" href={projectGitHubUrl} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
