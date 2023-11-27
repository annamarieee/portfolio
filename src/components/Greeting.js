import Button from "react-bootstrap/Button";
import "./Greeting.css";
import { Col, Container, Row } from "react-bootstrap";

function Greeting() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="greeting-body">
            <h1 className="greeting-title">ASSOCIATE SOFTWARE ENGINEER</h1>
            <br />
            <h3 className="role">Anna Marie E. Marasigan</h3>
            <div>
              <br />
              <Button href="#about" variant="outline-secondary">
                SCROLL FOR MORE
              </Button>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Greeting;
