import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import journey from "./assets/g20.jpg";
import { motion } from "framer-motion";

const VisualArtsSection = () => {
  return (
    <section
      className="text-gray-600 px-6 md:px-12 lg:px-24 body-font bg-black flex items-center justify-center min-h-screen"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="container px-5 py-12 md:py-12 mx-auto flex flex-wrap justify-center">
        <motion.div
          className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src={journey}
          />
        </motion.div>
        <div className="flex flex-col flex-wrap lg:py-6 lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <motion.div
            className="flex flex-col mb-10 items-center lg:items-start"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_lc9P4W.json"
                style={{ height: "48px", width: "48px" }}
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-[#CA8A04] font-mono text-lg title-font font-medium mb-3">
                My Journey
              </h2>
              <p className="leading-relaxed text-base font-mono text-gray-400">
                My journey in the world of visual arts began with a deep
                fascination for the magic of movies and the power of design. I
                pursued my passion by obtaining a degree in Visual Effects and
                Graphic Design, and since then, I have been on a relentless
                quest to push the boundaries of creativity. My work spans across
                various mediums, including film, television, advertising, and
                digital media.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col mb-10 items-center lg:items-start"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_v1yudlrx.json"
                style={{ height: "48px", width: "48px" }}
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-[#CA8A04]  font-Arial   text-lg title-font font-medium mb-3">
                Skills & Expertise
              </h2>
              <p className="leading-relaxed text-base text-gray-400">
                <ul className="list-none font-mono pl-5 text-left">
                  <h1 className="text-lg pb-2 text-white">
                    Visual Effects VFX{" "}
                  </h1>
                  <li>
                    I specialize in creating realistic and immersive visual
                    effects that enhance storytelling and captivate audiences.
                    From seamless compositing to dynamic simulations, I bring a
                    touch of magic to every project.
                  </li>

                  <h1 className="text-lg  py-2 text-white">Graphic Design</h1>
                  <li>
                    With a keen eye for aesthetics and detail, I craft visually
                    striking designs that communicate messages effectively. My
                    expertise includes branding, logo design, digital
                    illustrations, and marketing materials.
                  </li>

                  <h1 className="text-lg py-2 text-white">3D Animation</h1>
                  <li>
                    I bring characters and environments to life with fluid and
                    realistic animations, adding depth and dimension to visual
                    narratives.
                  </li>
                  <h1 className="text-lg py-2 text-white">Motion Graphics</h1>
                  <li>
                    I create dynamic and engaging motion graphics that elevate
                    visual content, making it more impactful and memorable.
                  </li>
                </ul>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisualArtsSection;
