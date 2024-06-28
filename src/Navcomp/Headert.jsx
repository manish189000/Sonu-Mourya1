import { useState } from "react";
import { NavLink } from "react-router-dom";

const Headerts = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full border-b md:border-0 fixed top-0 z-50">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <NavLink to="/">
            <h1 className="text-2xl font-Arial font-black ">Sonu Mourya</h1>
          </NavLink>
          <div className="md:hidden">
            <button
              className="text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center font-Arial font-bold items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="hover:text-[#7E25CA]">
              <NavLink
                to="/"
                exact
                className="transition duration-300 ease-in-out"
                activeClassName="font-Arial"
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-[#7E25CA]">
              <NavLink
                to="/about"
                className="transition duration-300 ease-in-out"
                activeClassName="text-indigo-200"
              >
                About
              </NavLink>
            </li>
            <li className="hover:text-[#7E25CA]">
              <NavLink
                to="/vfx"
                className="transition duration-300 font-Arial ease-in-out"
                activeClassName="text-indigo-200"
              >
                VFX
              </NavLink>
            </li>
            <li className="hover:text-[#7E25CA]">
              <NavLink
                to="/graphicdesigner"
                className="transition duration-300  font-Arial ease-in-out"
                activeClassName="text-indigo-200"
              >
                Graphic Designer
              </NavLink>
            </li>
            <li className="hover:text-[#7E25CA]">
              <NavLink
                to="/contact"
                className="transition duration-300 font-Arial ease-in-out"
                activeClassName="text-indigo-200"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <NavLink
            to="/contact"
            className="py-3 px-4 transition duration-300  font-black font-Arial ease-in-out bg-[#b84ffd] rounded-md shadow text-white"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Headerts;
