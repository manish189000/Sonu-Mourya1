import React from "react";
import { Link } from "react-router-dom";
import { motion, px } from "framer-motion";
import Abouts from "../assets/Home-About-Sonu-Mourya.png";

const Aboutss = () => {
  return (
    <div className="bg-gradient-to-r from-[black] via-[#CA8A04] to-[#000000] min-h-screen flex items-center justify-center">
      <section className="my-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 flex-1 gap-3 sm:text-center lg:text-left p-6"
        >
          <h1 className="text-[#CA8A04] font-Arial font-bold text-4xl xl:text-5xl">
            About Me
          </h1>
          <h1 className="text-gray-800 font-Arial font-bold text-4xl xl:text-5xl">
            <span className="text-[#CA8A0]">
              {" "}
              VFX Artist & Graphic Designer
            </span>
          </h1>
          <p className="text-gray-500 text-[17px] font-Arial max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Welcome to my creative world! I’m Sonu Mourya, a passionate VFX
            artist and graphic designer dedicated to bringing imagination to
            life through stunning visual effects and innovative designs. With
            years of experience in the industry, I have honed my skills in
            creating captivating visuals that tell compelling stories and leave
            a lasting impact.
          </p>
          <div>
            <p className="text-gray-800 font-mono py-3">View Our Journey</p>
            <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="outline-none font-Arial bg-[#CA8A04] text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2 sm:w-auto"
                >
                  View More
                </motion.button>
              </Link>
            </form>
          </div>
        </motion.div>
        <motion.div
          
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center   p-2  lg:mt-0 lg:ml-3 overflow-hidden border-solid border-2 border-black-600"
          
        >
          <img
            src={Abouts}
            style={{height: "100%", width: "100%"}}
            className="rounded-lg shadow-md  "
            
            
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Aboutss;
