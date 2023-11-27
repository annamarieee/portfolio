import React from "react";
import "./Welcome.css";
import { Container } from "react-bootstrap";
import WelcomePopup from "./WelcomePopup";

function Welcome() {
  return (
    <div className="Welcome">
      <Container style={{ height: "80%" }}>
        <div className="welcome-logo">
          <img
            src="/images/logo.png"
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="My logo"
          />
        </div>
        <WelcomePopup />
      </Container>
    </div>
  );
}

export default Welcome;
