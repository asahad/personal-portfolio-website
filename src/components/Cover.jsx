import { Container } from "react-bootstrap";

const Cover = () => {
  return (
    <section style={{ padding: "100px 0 80px" }}>
      <Container className="text-center">
        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: "800",
            lineHeight: "1.2",
          }}
        >
          Alhassan Sahad
        </h1>

        <h2
          style={{
            marginTop: "12px",
            fontSize: "1.6rem",
            fontWeight: "400",
            color: "#555",
          }}
        >
          Data Scientist
        </h2>

        <p
          style={{
            marginTop: "28px",
            maxWidth: "720px",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "1.1rem",
            lineHeight: "1.7",
            color: "#333",
          }}
        >
          I design and build data-driven systems that turn complex data into
          clear insights and measurable impact.
        </p>
      </Container>
    </section>
  );
};

export default Cover;
