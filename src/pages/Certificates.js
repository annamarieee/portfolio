import React from "react";
import "./Certificates.css";
import { Col, Container, Row } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import certificates from "../portfolioData/certificates";

function Certificates() {
  return (
    <div id="certificates" className="Certificate">
      <Container>
        <h1>Certificates</h1>
        <Row xs={1} md={3} className="g-3">
          {certificates.map((certificates, idx) => (
            <Col key={idx}>
              <CustomCard
                title={certificates.title}
                description={certificates.description}
                image={certificates.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Certificates;
