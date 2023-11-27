import React from "react";
import { Container } from "react-bootstrap";
import "./SkillsSubsection.css";
import skillsSubSection from "../portfolioData/skillsSubSection";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsSubSection() {
  return (
    <Container fluid>
      <div className="tab-contents">
        <ul>
          {skillsSubSection.map((skillsSubSection, idx) => (
            <li key={idx}>
              <span>{skillsSubSection.name}</span>
              <br />
              <ProgressBar now={skillsSubSection.percentage} variant="info" />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default SkillsSubSection;
