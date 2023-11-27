import React, { useState } from "react";
import "./About.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import AboutNavbar from "../components/nav/AboutNavbar";
import SkillsSubSection from "../components/SkillsSubSection";
import ExperienceSubSection from "../components/ExperienceSubSection";
import EducationSubSection from "../components/EducationSubSection";

function About() {
  const [activeSubSection, setActiveSubSection] = useState("skills");

  return (
    <div id="about" className="About">
      <Container>
        <br></br>
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
              I have a 12-months experience as an Associate Software Engineer at
              Accenture and a 3-months experience as an intern at ROC.PH. I have
              gained skills in both company as well as by self-studying.
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
