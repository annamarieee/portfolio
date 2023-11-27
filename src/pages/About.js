import React, { useState } from "react";
import "./About.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import AboutNavbar from "../components/nav/AboutNavbar";
import SkillsSubSection from "../components/SkillsSubSection";
import ExperienceSubSection from "../components/ExperienceSubSection";
import EducationSubSection from "../components/EducationSubSection";

function About() {
  const [activeSubSection, setActiveSubSection] = useState("");

  return (
    <div id="about" className="About">
      <Container>
        <Row>
          <Col>
            <Image
              className="pic"
              width="100%"
              height="300"
              src="/images/pic2.JPG"
            />
          </Col>
          <Col>
            <h1>About Me</h1>
            <p className="about-me">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <AboutNavbar setActiveSubSection={setActiveSubSection} />

            <div style={{ overflow: "hidden" }}>
              {activeSubSection === "skills" && <SkillsSubSection />}
              {activeSubSection === "experience" && <ExperienceSubSection />}
              {activeSubSection === "education" && <EducationSubSection />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
