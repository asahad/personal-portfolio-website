
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container className="text-center py-3">
        <p className="mb-0">&copy; {new Date().getFullYear()} Alhassan Sahad</p>
      </Container>
    </footer>
  );
};

export default Footer;
