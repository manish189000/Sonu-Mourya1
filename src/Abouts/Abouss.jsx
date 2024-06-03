import React from "react";
import Abouts from "../assets/About.jpg";

const Aboutss = () => {
  return (
    <section className="mt-24 mx-auto   max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 gap-3 sm:text-center lg:text-left">
        <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
          About Me
        </h1>
        <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
          Alice Walker
          <span className="text-[#65a30d]"> Based in Newyork</span>
        </h1>
        <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
          Welcome to my creative world, where imagination knows no bounds and
          art comes to life. As an artist, I specialize in sketching and
          painting, translating thoughts and emotions into visual masterpieces.
        </p>
        <div>
          <p className="text-gray-800 py-3">
            Subscribe to our newsletter and we'll save your time
          </p>
          <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
            />
            <button className="outline-none bg-[#65A30D] text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
        <img src={Abouts} className="w-full mx-auto sm:w-10/12  lg:w-full" />
      </div>
    </section>
  );
};

export default Aboutss;
