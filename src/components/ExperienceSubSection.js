import React from "react";
import { Container } from "react-bootstrap";

const experienceSubSection = [
  {
    name: "Accenture",
    description: "Associate Software Engineer",
    years: "Sept. 2022 - Present",
  },
  {
    name: "ROC.PH",
    description: "Network, Engineering & Security",
    years: "3 months",
  },
  {
    name: "ROC.PH",
    description: "Team Leader",
    years: "1 month",
  },
];

function ExperienceSubSection() {
  return (
    <Container fluid>
      <div className="tab-contents">
        <ul>
          {experienceSubSection.map((experienceSubSection, idx) => (
            <li key={idx}>
              <span>{experienceSubSection.name}</span>
              <br />
              {experienceSubSection.description}
              <br />
              {experienceSubSection.years}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default ExperienceSubSection;
