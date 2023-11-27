import Button from "react-bootstrap/Button";
import "./Greeting.css";
import { Col, Container, Row } from "react-bootstrap";

function Greeting() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="greeting-body">
            <h1 className="greeting-title">Anna Marie Marasigan</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only
            </p>
            <div>
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
