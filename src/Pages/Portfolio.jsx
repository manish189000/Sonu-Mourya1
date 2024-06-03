import React from "react";
import Header from "../Navcomp/Header";
import ArtistPortfolio from "../Art";
import Headerts from "../Navcomp/Headert";
import Footer from "../Footer";

const Portfolio = () => {
  return (
    <div>
      <Headerts />
      <div className="parents  pt-32">
        <ArtistPortfolio />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
