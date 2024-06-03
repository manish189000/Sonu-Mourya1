// // // // // // import React from "react";
// // // // // // import { NavLink } from "react-router-dom";

// // // // // // const Header = () => {
// // // // // //   return (
// // // // // //     <div>
// // // // // //       <header>
// // // // // //         <a href="#">Logo</a>
// // // // // //       </header>

// // // // // //       <nav>
// // // // // //         <ul>
// // // // // //           <li>
// // // // // //             <NavLink to="/" exact>
// // // // // //               Home
// // // // // //             </NavLink>
// // // // // //           </li>
// // // // // //           <li>
// // // // // //             <NavLink to="/about">About</NavLink>
// // // // // //           </li>
// // // // // //           <li>
// // // // // //             <NavLink to="/portfolio">Portfolio</NavLink>
// // // // // //           </li>
// // // // // //         </ul>
// // // // // //         <p>This is home page only</p>
// // // // // //       </nav>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Header;

// // // // // import React, { useState } from "react";
// // // // // import { NavLink } from "react-router-dom";

// // // // // const Header = () => {
// // // // //   const [isOpen, setIsOpen] = useState(false);

// // // // //   const toggleMenu = () => {
// // // // //     setIsOpen(!isOpen);
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <header className="bg-blue-500 text-white p-4  items-center">

// // // // //         <button className="md:hidden block" onClick={toggleMenu}>
// // // // //           <svg
// // // // //             className="w-6 h-6"
// // // // //             fill="none"
// // // // //             stroke="currentColor"
// // // // //             viewBox="0 0 24 24"
// // // // //             xmlns="http://www.w3.org/2000/svg"
// // // // //           >
// // // // //             <path
// // // // //               strokeLinecap="round"
// // // // //               strokeLinejoin="round"
// // // // //               strokeWidth="2"
// // // // //               d="M4 6h16M4 12h16m-7 6h7"
// // // // //             ></path>
// // // // //           </svg>
// // // // //         </button>
// // // // //       </header>

// // // // //       <nav
// // // // //         className={`${
// // // // //           isOpen ? "block" : "hidden"
// // // // //           } md:block bg-blue-500 text-white`}

// // // // //       >

// // // // //         <ul className="md:flex items-center md:space-x-4">

// // // // //           <li className="md:my-0 my-2">
// // // // //             <NavLink
// // // // //               to="/"
// // // // //               exact
// // // // //               activeClassName="underline"
// // // // //               className="block p-2"
// // // // //             >
// // // // //               Home
// // // // //             </NavLink>
// // // // //           </li>
// // // // //           <li className="md:my-0 my-2">
// // // // //             <NavLink
// // // // //               to="/about"
// // // // //               activeClassName="underline"
// // // // //               className="block p-2"
// // // // //             >
// // // // //               About
// // // // //             </NavLink>
// // // // //           </li>
// // // // //           <li className="md:my-0 my-2">
// // // // //             <NavLink
// // // // //               to="/portfolio"
// // // // //               activeClassName="underline"
// // // // //               className="block p-2"
// // // // //             >
// // // // //               Portfolio
// // // // //             </NavLink>
// // // // //           </li>
// // // // //           <li className="md:my-0 my-2">
// // // // //             <NavLink
// // // // //               to="/contact"
// // // // //               activeClassName="underline"
// // // // //               className="block p-2"
// // // // //             >
// // // // //               Contact
// // // // //             </NavLink>
// // // // //           </li>
// // // // //         </ul>
// // // // //       </nav>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Header;

// // // // import { useState } from "react";
// // // // import { NavLink } from "react-router-dom";

// // // // const Header = () => {
// // // //   const [state, setState] = useState(false);

// // // //   const navigation = [
// // // //     { title: "Customers", path: "/contact" },
// // // //     { title: "Careers", path: "/careers" },
// // // //     { title: "Guides", path: "/guides" },
// // // //     { title: "Partners", path: "/partners" },
// // // //   ];

// // // //   return (
// // // //     <nav className="bg-white w-full border-b md:border-0 md:static">
// // // //       <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
// // // //         <div className="flex items-center justify-between py-3 md:py-5 md:block">
// // // //           <NavLink to="/">
// // // //             <img
// // // //               src="https://www.floatui.com/logo.svg"
// // // //               width={120}
// // // //               height={50}
// // // //               alt="Float UI logo"
// // // //             />
// // // //           </NavLink>
// // // //           <div className="md:hidden">
// // // //             <button
// // // //               className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
// // // //               onClick={() => setState(!state)}
// // // //             >
// // // //               {state ? (
// // // //                 <svg
// // // //                   xmlns="http://www.w3.org/2000/svg"
// // // //                   className="h-6 w-6"
// // // //                   viewBox="0 0 20 20"
// // // //                   fill="currentColor"
// // // //                 >
// // // //                   <path
// // // //                     fillRule="evenodd"
// // // //                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// // // //                     clipRule="evenodd"
// // // //                   />
// // // //                 </svg>
// // // //               ) : (
// // // //                 <svg
// // // //                   xmlns="http://www.w3.org/2000/svg"
// // // //                   className="h-6 w-6"
// // // //                   fill="none"
// // // //                   viewBox="0 0 24 24"
// // // //                   stroke="currentColor"
// // // //                 >
// // // //                   <path
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                     strokeWidth={2}
// // // //                     d="M4 8h16M4 16h16"
// // // //                   />
// // // //                 </svg>
// // // //               )}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //         <div
// // // //           className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
// // // //             state ? "block" : "hidden"
// // // //           }`}
// // // //         >
// // // //           <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
// // // //             {navigation.map((item, idx) => (
// // // //               <li key={idx} className="text-gray-600 hover:text-indigo-600">
// // // //                 <NavLink to={item.path} activeClassName="text-indigo-600">
// // // //                   {item.title}
// // // //                 </NavLink>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>
// // // //         <div className="hidden md:inline-block">
// // // //           <NavLink
// // // //             to="/get-started"
// // // //             className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
// // // //           >
// // // //             Get Started
// // // //           </NavLink>
// // // //         </div>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Header;

// // // import { useState } from "react";
// // // import { NavLink } from "react-router-dom";

// // // const Header = () => {
// // //   const [state, setState] = useState(false);

// // //   return (
// // //     <nav className="bg-white w-full border-b md:border-0 md:static">
// // //       <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
// // //         <div className="flex items-center justify-between py-3 md:py-5 md:block">
// // //           <NavLink to="/">
// // //             <img
// // //               src="https://www.floatui.com/logo.svg"
// // //               width={120}
// // //               height={50}
// // //               alt="Float UI logo"
// // //             />
// // //           </NavLink>
// // //           <div className="md:hidden">
// // //             <button
// // //               className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
// // //               onClick={() => setState(!state)}
// // //             >
// // //               {state ? (
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   className="h-6 w-6"
// // //                   viewBox="0 0 20 20"
// // //                   fill="currentColor"
// // //                 >
// // //                   <path
// // //                     fillRule="evenodd"
// // //                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// // //                     clipRule="evenodd"
// // //                   />
// // //                 </svg>
// // //               ) : (
// // //                 <svg
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   className="h-6 w-6"
// // //                   fill="none"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M4 8h16M4 16h16"
// // //                   />
// // //                 </svg>
// // //               )}
// // //             </button>
// // //           </div>
// // //         </div>
// // //         <div
// // //           className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
// // //             state ? "block" : "hidden"
// // //           }`}
// // //         >
// // //           <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
// // //             <li className="text-gray-600 hover:text-indigo-600">
// // //               <NavLink to="/" exact activeClassName="text-indigo-600">
// // //                 Home
// // //               </NavLink>
// // //             </li>
// // //             <li className="text-gray-600 hover:text-indigo-600">
// // //               <NavLink to="/about" activeClassName="text-indigo-600">
// // //                 About
// // //               </NavLink>
// // //             </li>
// // //             <li className="text-gray-600 hover:text-indigo-600">
// // //               <NavLink to="/portfolio" activeClassName="text-indigo-600">
// // //                 Portfolio
// // //               </NavLink>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //         <div className="hidden md:inline-block">
// // //           <NavLink
// // //             to="/get-started"
// // //             className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
// // //           >
// // //             Get Started
// // //           </NavLink>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Header;

// // import { useState, useEffect } from "react";
// // import { NavLink } from "react-router-dom";

// // const Header = () => {
// //   const [state, setState] = useState(false);
// //   const [scroll, setScroll] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > 50) {
// //         setScroll(true);
// //       } else {
// //         setScroll(false);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);

// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <nav
// //       className={`fixed w-full z-30 transition duration-300 ease-in-out ${
// //         scroll
// //           ? "bg-indigo-600 text-white shadow-lg"
// //           : "bg-transparent text-black"
// //       }`}
// //     >
// //       <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
// //         <div className="flex items-center justify-between py-3 md:py-5 md:block">
// //           <NavLink to="/">
// //             <img
// //               src="https://www.floatui.com/logo.svg"
// //               width={120}
// //               height={50}
// //               alt="Float UI logo"
// //               className={`transition duration-300 ease-in-out ${
// //                 scroll ? "filter invert" : ""
// //               }`}
// //             />
// //           </NavLink>
// //           <div className="md:hidden">
// //             <button
// //               className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
// //               onClick={() => setState(!state)}
// //             >
// //               {state ? (
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-6 w-6"
// //                   viewBox="0 0 20 20"
// //                   fill="currentColor"
// //                 >
// //                   <path
// //                     fillRule="evenodd"
// //                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// //                     clipRule="evenodd"
// //                   />
// //                 </svg>
// //               ) : (
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-6 w-6"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M4 8h16M4 16h16"
// //                   />
// //                 </svg>
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //         <div
// //           className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
// //             state ? "block" : "hidden"
// //           }`}
// //         >
// //           <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
// //             <li className="hover:text-indigo-200">
// //               <NavLink
// //                 to="/"
// //                 exact
// //                 className="transition duration-300 ease-in-out"
// //                 activeClassName="text-indigo-200"
// //               >
// //                 Home
// //               </NavLink>
// //             </li>
// //             <li className="hover:text-indigo-200">
// //               <NavLink
// //                 to="/about"
// //                 className="transition duration-300 ease-in-out"
// //                 activeClassName="text-indigo-200"
// //               >
// //                 About
// //               </NavLink>
// //             </li>
// //             <li className="hover:text-indigo-200">
// //               <NavLink
// //                 to="/portfolio"
// //                 className="transition duration-300 ease-in-out"
// //                 activeClassName="text-indigo-200"
// //               >
// //                 Portfolio
// //               </NavLink>
// //             </li>
// //           </ul>
// //         </div>
// //         <div className="hidden md:inline-block">
// //           <NavLink
// //             to="/get-started"
// //             className="py-3 px-4 transition duration-300 ease-in-out bg-indigo-600 hover:bg-indigo-700 rounded-md shadow text-white"
// //           >
// //             Get Started
// //           </NavLink>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Header;

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [state, setState] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 transition duration-300 ease-in-out ${
        scroll ? "bg-[white] text-black shadow-lg" : "bg-transparent text-white"
      }`}
    >
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <NavLink to="/">
            {/* <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
              className={`transition duration-300 ease-in-out ${
                scroll ? "filter invert" : ""
              }`}
            /> */}

            <h1 className=" text-2xl">Logo</h1>
          </NavLink>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
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
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="hover:text-[#65A30D]">
              <NavLink
                to="/"
                exact
                className="transition duration-300 ease-in-out"
                activeClassName="text-indigo-200"
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-[#65A30D]">
              <NavLink
                to="/about"
                className="transition duration-300 ease-in-out"
                activeClassName="text-indigo-200"
              >
                About
              </NavLink>
            </li>
            <li className="hover:text-[#65A30D]">
              <NavLink
                to="/portfolio"
                className="transition duration-300 ease-in-out"
                activeClassName="text-indigo-200"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="hover:text-[#65A30D]">
              <NavLink
                to="/contact"
                className="transition duration-300 ease-in-out"
                activeClassName="text-indigo-200"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <NavLink
            to="/get-started"
            className="py-3 px-4 transition duration-300 ease-in-out bg-[#65A30D]  rounded-md shadow text-white"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   const [state, setState] = useState(false);
//   const [scroll, setScroll] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY < 600) {
//         setScroll(true);
//       } else {
//         setScroll(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-30  transition duration-300 ease-in-out ${
//         scroll
//           ? "bg-indigo-600 text-black shadow-lg"
//           : "bg-transparent text-white"
//       }`}
//     >
//       <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
//         <div className="flex items-center justify-between py-3 md:py-5 md:block">
//           <NavLink to="/">
//             {/* <img
//               src="https://www.floatui.com/logo.svg"
//               width={120}
//               height={50}
//               alt="Float UI logo"
//               className={`transition duration-300 ease-in-out ${
//                 scroll ? "filter invert" : ""
//               }`}
//             /> */}

//             <p>Logo</p>
//           </NavLink>
//           <div className="md:hidden">
//             <button
//               className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
//               onClick={() => setState(!state)}
//             >
//               {state ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 8h16M4 16h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//         <div
//           className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//             state ? "block" : "hidden"
//           }`}
//         >
//           <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//             <li className="hover:text-indigo-200">
//               <NavLink
//                 to="/"
//                 exact
//                 className="transition duration-300 ease-in-out"
//                 activeClassName="text-indigo-200"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="hover:text-indigo-200">
//               <NavLink
//                 to="/about"
//                 className="transition duration-300 ease-in-out"
//                 activeClassName="text-indigo-200"
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="hover:text-indigo-200">
//               <NavLink
//                 to="/portfolio"
//                 className="transition duration-300 ease-in-out"
//                 activeClassName="text-indigo-200"
//               >
//                 Portfolio
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//         <div className="hidden md:inline-block">
//           <NavLink
//             to="/get-started"
//             className="py-3 px-4 transition duration-300 ease-in-out bg-[#65A30D] rounded-md shadow text-white"
//           >
//             Get Started
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
