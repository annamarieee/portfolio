import React from "react";
import { Container } from "react-bootstrap";

const educationSubSection = [
  {
    name: "Maryhill College",
    description: "Primary",
    years: "2007-2012",
  },
  {
    name: "Maryhill College",
    description: "Secondary",
    years: "2012-2018",
  },
  {
    name: "Southern Luzon State University",
    description: "Computer Engineering",
    years: "2018-2022",
  },
];

function EducationSubSection() {
  return (
    <Container fluid>
      <div className="tab-contents">
        <ul>
          {educationSubSection.map((educationSubSection, idx) => (
            <li key={idx}>
              <span>{educationSubSection.name}</span>
              <br />
              {educationSubSection.description}
              <br />
              {educationSubSection.years}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default EducationSubSection;
