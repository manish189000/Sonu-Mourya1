import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Me = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <section>
        {/* <div className="dark:bg-black  py-28" data-aos="fade-in">
          <div className="container flex flex-col items-center px-4   mx-auto text-center lg:pb-56 md:pt-32 md:px-10 lg:px-32 dark:text-gray-50">
            <h1
              className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-[#CA8A04] dark:text-[#CA8A04]"
              style={{ fontFamily: "Arial, sans-serif" }}
              data-aos="fade-up"
            >
              VFX Artist & Graphic Designer
            </h1>
            <p
              className="mt-6  text-lg sm:mb-12 xl:max-w-3xl text-white dark:text-purple-500"
              style={{ fontFamily: "Arial, sans-serif" }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Welcome to my creative world! I’m Sonu Mourya, a passionate VFX
              artist and graphic designer dedicated to bringing imagination to
              life through stunning visual effects and innovative designs. With
              years of experience in the industry, I have honed my skills in
              creating captivating visuals that tell compelling stories and
              leave a lasting impact.
            </p>
            <div
              className="flex flex-wrap justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link to="/home">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div> */}

        <section>
          <div className="dark:bg-violet-600">
            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
              <h1 className="text-5xl font-Arial font-black pt-10 leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
                VFX Artist & Graphic Designer
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
                Welcome to my creative world! I’m Sonu Mourya, a passionate VFX
                artist and graphic designer dedicated to bringing imagination to
                life through stunning visual effects and innovative designs.
                With years of experience in the industry, I have honed my skills
                in creating captivating visuals that tell compelling stories and
                leave a lasting impact.
              </p>
              <div className="flex flex-wrap justify-center">
                <Link to="/contact">
                  <button
                    type="button"
                    className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <img
            src="https://source.unsplash.com/random/480x320"
            alt=""
            className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
          />
        </section>
      </section>
    </div>
  );
};

export default Me;
