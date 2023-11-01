import { Card, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../App.css";

const Cover = () => {
  const [typedText, setTypedText] = useState("");
  const originalText =
    "Hello!\nI'm Alhassan Sahad. I am a Software Engineer and Data Scientist";

  useEffect(() => {
    let charIndex = 5;
    const typingInterval = setInterval(() => {
      if (charIndex <= originalText.length) {
        setTypedText(originalText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <Container className="pt-5 d-none d-md-flex">
        <Card className="d-flex flex-row align-items-center custom-card pt-5">
          <Card.Body>
            <Card.Text
              className="p-4 cover-text"
              style={{
                fontSize: "40px",
                color: "purple",
                textShadow: "4px 4px 4px",
              }}
            >
              {typedText}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <Container className="pt-5 d-md-none">
        <Card className="no-background-border">
          <Card.Text
            className="cover-text text-center"
            style={{ height: "200px" }}
          >
            {typedText}
          </Card.Text>
        </Card>
      </Container>
    </>
  );
};
export default Cover;
