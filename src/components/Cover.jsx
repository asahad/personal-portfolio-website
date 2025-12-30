import { Container } from "react-bootstrap";

const Cover = () => {
  return (
    <Container className="pt-5 pb-5 text-center">
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "900",
          fontFamily: "Rubik",
          lineHeight: "1.2",
        }}
      >
        Hi, I’m Alhassan Sahad
      </h1>

      <h2
        className="mt-3"
        style={{
          fontSize: "1.5rem",
          fontWeight: "400",
          color: "#4b5563",
        }}
      >
        Data Scientist
      </h2>

      <p
        className="mt-4 mx-auto"
        style={{
          maxWidth: "700px",
          fontSize: "1.1rem",
          lineHeight: "1.7",
          color: "#374151",
        }}
      >
        I build data-driven systems that turn complex data into
        clear insights and real-world impact.
      </p>
    </Container>
  );
};

export default Cover;
