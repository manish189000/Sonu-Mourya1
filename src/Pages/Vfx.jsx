import React from "react";
import Navbar from "../Navcomp/Headert";
import Vfxs from "../vfxvideo/vfxvideo";
import Footer from "../Footer";
import VfxHero from "../vfxvideo/vfxhero";

const Vfx = () => {
  return (
    <>
      <Navbar />
      <VfxHero />
      <Vfxs />
      <Footer />
    </>
  );
};

export default Vfx;
