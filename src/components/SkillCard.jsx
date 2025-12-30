import { Card } from "react-bootstrap";

const SkillCard = ({ image, title }) => {
  return (
    <Card className="border-0 text-center">
      <Card.Img
        src={image}
        alt={title}
        style={{
          height: "60px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
      <Card.Text style={{ fontSize: "0.9rem" }}>{title}</Card.Text>
    </Card>
  );
};

export default SkillCard;
