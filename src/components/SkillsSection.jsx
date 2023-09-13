import { Container, Row, Col, Card } from "react-bootstrap";
import jsLogo from "../img/JSLogo.png";
import reactLogo from "../img/reactLogo.png";
import firebaseLogo from "../img/firebaseLogo.png";
import htmlLogo from "../img/htmlLogo.png";
import cssLogo from "../img/css-logo.png";
import reduxLogo from "../img/ReduxImg.png";
import gcpLogo from "../img/gcpLogo.png";
import gitLogo from "../img/gitLogo.png";
import npmLogo from "../img/npmLogo.png";
import bootstrapLogo from "../img/bootstrapImg.png";
import pythonLogo from "../img/PythonImg.png";
import sqlLogo from "../img/sqlImage.png";

const SkillsSection = () => {
  return (
    <Container className="pt-5" id="Skills">
      <h1 style={{ fontFamily: "Rubik", fontWeight: "900", lineHeight: "1em" }}>
        My Skills
      </h1>
      <hr />
      <Row>
        <Col xs={1}></Col>
        <Col xs={2}>
          <Card className="no-background-border" style={{ maxWidth: "120px" }}>
            <Card.Img src={jsLogo} style={{ maxHeight: "80px" }} />
            <Card.Body>
              <Card.Title
                className="d-none d-lg-block"
                style={{ fontSize: "1rem" }}
              >
                JavaScript
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="no-background-border" style={{ maxWidth: "120px" }}>
            <Card.Img src={reactLogo} style={{ maxHeight: "80px" }} />
            <Card.Body>
              <Card.Title
                className="d-none d-lg-block"
                style={{ fontSize: "1rem" }}
              >
                React
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="no-background-border" style={{ maxWidth: "120px" }}>
            <Card.Img src={bootstrapLogo} style={{ maxHeight: "80px" }} />
            <Card.Body>
              <Card.Title
                className="d-none d-lg-block"
                style={{ fontSize: "1rem" }}
              >
                Bootstrap
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="no-background-border" style={{ maxWidth: "120px" }}>
            <Card.Img src={cssLogo} style={{ maxHeight: "80px" }} />
            <Card.Body>
              <Card.Title
                className="d-none d-lg-block"
                style={{ fontSize: "1rem" }}
              >
                CSS
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="no-background-border" style={{ maxWidth: "120px" }}>
            <Card.Img src={sqlLogo} style={{ maxHeight: "80px" }} />
            <Card.Body>
              <Card.Title
                className="d-none d-lg-block"
                style={{ fontSize: "1rem" }}
              >
                SQL
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={1}></Col>
      </Row>
      <Row className="pt-5">
        <Col xs={1}></Col>
        <Col xs={2}>
          <Card className="no-background-border" style={{ maxWidth: "120px" }}>
            <Card.Img src={htmlLogo} style={{ maxHeight: "80px" }} />
            <Card.Body>
              <Card.Title
                className="d-none d-lg-block"
                style={{ fontSize: "1rem" }}
              >
                HTML
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="no-background-border" style={{ maxWidth: "120px" }}>
            <Card.Img src={firebaseLogo} style={{ maxHeight: "80px" }} />
            <Card.Body>
              <Card.Title
                className="d-none d-lg-block"
                style={{ fontSize: "1rem" }}
              >
                Firebase
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="no-background-border" style={{ maxWidth: "120px" }}>
            <Card.Img src={gitLogo} style={{ maxHeight: "80px" }} />
            <Card.Body>
              <Card.Title
                className="d-none d-lg-block"
                style={{ fontSize: "1rem" }}
              >
                Git
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="no-background-border" style={{ maxWidth: "120px" }}>
            <Card.Img src={gcpLogo} style={{ maxHeight: "80px" }} />
            <Card.Body>
              <Card.Title
                className="d-none d-lg-block"
                style={{ fontSize: "1rem" }}
              >
                GCP
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="no-background-border" style={{ maxWidth: "120px" }}>
            <Card.Img src={npmLogo} style={{ maxHeight: "80px" }} />
            <Card.Body>
              <Card.Title
                className="d-none d-lg-block"
                style={{ fontSize: "1rem" }}
              >
                NPM
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={1}></Col>
      </Row>
      <Row className="pt-5">
        <Col xs={1}></Col>
        <Col xs={2}>
          <Card className="no-background-border" style={{ maxWidth: "120px" }}>
            <Card.Img src={reduxLogo} style={{ maxHeight: "80px" }} />
            <Card.Body>
              <Card.Title
                className="d-none d-lg-block"
                style={{ fontSize: "1rem" }}
              >
                Redux
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="no-background-border" style={{ maxWidth: "120px" }}>
            <Card.Img src={pythonLogo} style={{ maxHeight: "80px" }} />
            <Card.Body>
              <Card.Title
                className="d-none d-lg-block"
                style={{ fontSize: "1rem" }}
              >
                Python
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  );
};

export default SkillsSection;
