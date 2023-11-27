import React from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";
import SOCIAL_LINKS from "../enum/socials";

function Contact() {
  return (
    <Container>
      <div id="contact" className="Contact">
        <a href={SOCIAL_LINKS.Gmail} target="_blank" rel="noreferrer">
          <img src="/images/gmail.jpeg" height="30" width="30" alt="gmail" />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href={SOCIAL_LINKS.Facebook} target="_blank" rel="noreferrer">
          <img src="/images/fb.jpeg" height="30" width="30" alt="facebook" />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href={SOCIAL_LINKS.LinkedIn} target="_blank" rel="noreferrer">
          <img
            src="/images/linkedin.jpeg"
            height="30"
            width="30"
            alt="linkedin"
          />
        </a>
      </div>
    </Container>
  );
}

export default Contact;
