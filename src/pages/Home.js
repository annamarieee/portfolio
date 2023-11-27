import React from "react";
import HomeNavbar from "../components/nav/HomeNavbar";
import Greeting from "../components/Greeting";
import "./Home.css";
import About from "./About";
import Experience from "./Experience";
import Certificates from "./Certificates";

function Home() {
  return (
    <div id="home" className="Home">
      <HomeNavbar />
      <Greeting />
      <About />
      <Certificates />
      <Experience />
    </div>
  );
}

export default Home;
