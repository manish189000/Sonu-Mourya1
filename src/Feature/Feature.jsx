import React from "react";
import { Link } from "react-router-dom";
import Feature1 from "../assets/Vfx-feature.webp";
import Feature2 from "../assets/graphic-feature.webp";

const Feature = () => {
  return (
    <div>
      <section className="bg-black ">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl  font-Arial text-[#CA8A04] font-bold tracking-tight text-center sm:text-5xl  ">
              Explore our VFX & Graphic Design Features
            </h2>
            <p className="max-w-3xl font-lato mx-auto mt-4 text-xl text-center  text-white">
              Elevate your visual storytelling with our advanced VFX & Graphic
              design tools and techniques.
            </p>
          </div>
          <div className="grid lg:gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-lato  font-bold tracking-tight sm:text-3xl text-[#CA8A04]">
                Powerful VFX Tools
              </h3>
              <p className="mt-3 text-lg font-lato  text-white">
                Our VFX suite offers a wide range of tools to create stunning
                visual effects, bringing your imagination to life.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-lato font-medium leading-6  text-white">
                      Realistic Effects
                    </h4>
                    <p className="mt-2 font-lato text-white">
                      Create lifelike effects that seamlessly blend with
                      real-world footage, enhancing the overall impact of your
                      projects.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg  font-lato font-medium leading-6  text-white">
                      Advanced Compositing
                    </h4>
                    <p className="mt-2 font-lato  text-white">
                      Combine multiple elements to create complex scenes with
                      ease, using our state-of-the-art compositing tools.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-lato font-medium leading-6 text-white">
                      Dynamic Simulations
                    </h4>
                    <p className="mt-2 font-lato text-white">
                      Achieve realistic simulations for particles, fluids, and
                      more, making your visuals more immersive than ever.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-lato font-medium leading-6 text-white">
                      Real-time Rendering
                    </h4>
                    <p className="mt-2 font-lato text-white">
                      Experience the power of real-time rendering, allowing for
                      immediate feedback and adjustments to your visual effects.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/vfx"
                className="inline-block font-lato mt-8 px-6 py-2 text-sm font-medium text-center text-white bg-[#8328D2] rounded-md hover:bg-[#6b1bb3] transition duration-300"
              >
                Explore VFX Features
              </Link>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={Feature1}
                alt="VFX"
                className="mx-auto dark:bg-gray-500 rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-16 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-lato font-bold tracking-tight sm:text-3xl text-[#CA8A04]">
                  Stunning Graphic Design Features
                </h3>
                <p className="mt-3 font-lato text-lg text-white">
                  Unleash your creativity with our graphic design tools that
                  offer unmatched precision and flexibility.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-lato font-medium leading-6  text-white">
                        Vector Illustrations
                      </h4>
                      <p className="mt-2 font-lato text-white">
                        Create scalable vector illustrations with precision and
                        ease, perfect for both digital and print media.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg  font-lato font-medium leading-6 dark:text-gray-900">
                        Photo Editing
                      </h4>
                      <p className="mt-2 font-lato text-white">
                        Enhance and manipulate photos with powerful editing
                        tools that provide professional-grade results.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-white">
                        Typography
                      </h4>
                      <p className="mt-2 font-lato  text-white">
                        Design beautiful typography with an array of fonts and
                        text tools, perfect for any project.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600  text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6  text-white">
                        Logo Design
                      </h4>
                      <p className="mt-2 font-lato text-white">
                        Craft unique and memorable logos that effectively
                        represent your brand's identity and vision.
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/graphicdesigner"
                  className="inline-block font-lato mt-8 px-6 py-2 text-sm font-medium text-center text-white bg-[#8328D2] rounded-md hover:bg-[#6b1bb3] transition duration-300"
                >
                  Explore Graphic Features
                </Link>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src={Feature2}
                  alt="Graphic Design"
                  className="mx-auto dark:bg-gray-500 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
