import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ padding: "30px 0", borderTop: "1px solid #eee" }}>
      <Container className="text-center">
        <p style={{ margin: 0, color: "#777" }}>
          © {new Date().getFullYear()} Alhassan Sahad and Latifatu Ahmed 
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
