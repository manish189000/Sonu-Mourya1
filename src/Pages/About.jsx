import React from "react";
import Header from "../Navcomp/Header";
import Painterinfo from "../Painterinfo";
import Me from "../Me";
import Headerts from "../Navcomp/Headert";
import Footer from "../Footer";
import Project from "../Projects/Project";
import ContactMe from "../Contactme/Contactme";

const About = () => {
  return (
    <div>
      <Headerts />

      <Me />
      <Painterinfo />
      <Project />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default About;
