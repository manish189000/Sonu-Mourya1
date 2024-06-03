import React from "react";
import Header from "../Navcomp/Header";
import Hero from "../Heroco/Hero";
import Aboutss from "../Abouts/Abouss";
import ImageCarousel from "../Grids/Grid";
import Testmonial from "../Testomonial";
import Footer from "../Footer";
const Home = () => {
  return (
    <div>
      <div className="parent  ">
        <Header />
        <Hero />
        <Aboutss />
        <ImageCarousel />
        <Testmonial />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
