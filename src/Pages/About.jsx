import React from "react";
import Header from "../Navcomp/Header";
import Painterinfo from "../Painterinfo";
import Me from "../Me";
import Awards from "./Awards";
import Headerts from "../Navcomp/Headert";
import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <Headerts />
      <h1 className=" pt-28"></h1>
      <Me />
      <Painterinfo />
      <Awards />
      <Footer />
    </div>
  );
};

export default About;
