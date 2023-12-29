import { Card } from "react-bootstrap";

const SkillCard = ({ image, title }) => {
  return (
    <Card
      className="no-background-border"
      style={{ maxWidth: "120px", marginBottom: "20px" }}
    >
      <Card.Img src={image} style={{ maxHeight: "80px" }} />
      <Card.Body>
        <Card.Title className="d-none d-lg-block" style={{ fontSize: "1rem" }}>
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};


export default SkillCard;