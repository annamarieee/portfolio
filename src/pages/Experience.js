import React from "react";
import "./Experience.css";
import { Col, Container, Row } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import experiences from "../portfolioData/experiences";

function Experience() {
  return (
    <div id="experience" className="Experience">
      <Container>
        <h1>Experience</h1>
        <Row xs={1} md={3} className="g-4">
          {experiences.map((experience, idx) => (
            <Col key={idx}>
              <CustomCard
                title={experience.title}
                description={experience.description}
                image={experience.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
