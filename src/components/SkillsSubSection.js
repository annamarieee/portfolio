import React from "react";
import { Container } from "react-bootstrap";
import "./SkillsSubsection.css";

const skillsSubSection = [
  {
    name: "Oracle CC&B",
    description: "Accenture",
    years: "",
  },
  {
    name: "Python",
    description: "lorem ipsum",
    years: "",
  },
  {
    name: "Java",
    description: "Accenture",
    years: "",
  },
];

function SkillsSubSection() {
  return (
    <Container fluid>
      <div className="tab-contents">
        <ul>
          {skillsSubSection.map((skillsSubSection, idx) => (
            <li key={idx}>
              <span>{skillsSubSection.name}</span>
              <br />
              {skillsSubSection.description}
              <br />
              {skillsSubSection.years}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default SkillsSubSection;
