import React from "react";
import Header from "../Navcomp/Headert";
import Hero from "../Heroco/Hero";
import Aboutss from "../Abouts/Abouss";
import ImageCarousel from "../Grids/Grid";
import Testmonial from "../Testomonial";
import Footer from "../Footer";
import Services from "../Service/Service";
import Clients from "../Clients/Client";
import Feature from "../Feature/Feature";

const Home = () => {
  return (
    <div>
      <div className="parent  ">
        <Header />
        <Hero />
        <Aboutss />
        <Feature />
        <Services />
        <Clients />
        <Testmonial />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
