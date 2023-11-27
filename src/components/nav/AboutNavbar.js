import { Container, Nav } from "react-bootstrap";

function AboutNavbar({ setActiveSubSection }) {
  return (
    <Container>
      <Nav
        justify
        variant="underline"
        defaultActiveKey="link-1"
        className="aboutnavbar"
      >
        <Nav.Item>
          <Nav.Link
            style={{ color: "black" }}
            eventKey="link-1"
            onClick={() => setActiveSubSection("skills")}
          >
            Skills
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{ color: "black" }}
            eventKey="link-2"
            onClick={() => setActiveSubSection("experience")}
          >
            Experience
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{ color: "black" }}
            eventKey="link-3"
            onClick={() => setActiveSubSection("education")}
          >
            Education
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default AboutNavbar;
