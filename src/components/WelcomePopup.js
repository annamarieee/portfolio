import React from "react";
import "./WelcomePopup.css";
import { Button } from "react-bootstrap";

function WelcomePopup() {
  return (
    <div className="welcome-popup">
      <div className="popup">
        <img
          className="image-popup"
          src="/images/welcome.png"
          alt="welcome bg"
        />
        <div className="text-popup">
          <h1>Hi, It's Anna</h1>
          <p>Welcome to my Cozy Space on the Internet!</p>
          <Button variant="outline-secondary" href="/home">
            GET TO KNOW ME!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePopup;
