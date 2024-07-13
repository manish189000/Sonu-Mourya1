import React from "react";
import Navbar from "../Navcomp/Headert";
import Vfxs from "../vfxvideo/vfxvideo";
import Footer from "../Footer";
import VfxHero from "../vfxvideo/vfxhero";
// import VfxHero1 from "../vfxvideo/vfxhero1";

const Vfx = () => {
  return (
    <>
      <Navbar />
      <VfxHero />
      {/* <VfxHero1 /> */}
      <Vfxs />
      <Footer />
    </>
  );
};

export default Vfx;
