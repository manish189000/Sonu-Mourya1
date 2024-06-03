// // import React from "react";
// // import Headerts from "../Navcomp/Headert";
// // import Footer from "../Footer";
// // const Contact = () => {
// //   return (
// //     <div>
// //       return (
// //       <Headerts />
// //       <main className="relative py-28 bg-[#395314]">
// //         <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
// //           <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
// //             <h3 className="text-cyan-400 font-semibold">Contact</h3>
// //             <p className="text-white text-3xl font-semibold sm:text-4xl">
// //               Get in touch
// //             </p>
// //             <p className="text-gray-300">
// //               We’d love to hear from you! Please fill out the form bellow.
// //             </p>
// //           </div>
// //           <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
// //             <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
// //               <div>
// //                 <label className="font-medium">Full name</label>
// //                 <input
// //                   type="text"
// //                   required
// //                   className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="font-medium">Email</label>
// //                 <input
// //                   type="email"
// //                   required
// //                   className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="font-medium">Phone number</label>
// //                 <div className="relative mt-2">
// //                   <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
// //                     <select className="text-sm bg-transparent outline-none rounded-lg h-full">
// //                       <option>US</option>
// //                       <option>ES</option>
// //                       <option>MR</option>
// //                     </select>
// //                   </div>
// //                   <input
// //                     type="number"
// //                     placeholder="+1 (555) 000-000"
// //                     required
// //                     className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
// //                   />
// //                 </div>
// //               </div>
// //               <div>
// //                 <label className="font-medium">Message</label>
// //                 <textarea
// //                   required
// //                   className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
// //                 ></textarea>
// //               </div>
// //               <button className="w-full px-4 py-2 text-white font-medium bg-[#1d2e05]-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
// //                 Submit
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //         <div
// //           className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
// //           style={{
// //             background:
// //               "linear-gradient(106.89deg, #f4fee7 0%, #d3f99d 25%, #9de635 50%, #4f7c0f 75%, #395314 100%)",
// //           }}
// //         ></div>
// //       </main>
// //       )
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Contact;

// import React from "react";
// import Headerts from "../Navcomp/Headert";
// import Footer from "../Footer";

// const Contact = () => {
//   return (
//     <div>
//       <Headerts />
//       <main className="relative py-28 bg-[#395314]">
//         <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
//           <div className="flex flex-wrap">
//             <div className="w-full lg:w-1/2 px-4">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.95373631531837!3d-37.816279579751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d3c7e0b0a29b!2sGoogle!5e0!3m2!1sen!2sus!4v1624255363351!5m2!1sen!2sus"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 title="Google Maps"
//               ></iframe>
//             </div>
//             <div className="w-full lg:w-1/2 mt-12 lg:mt-0 px-4">
//               <div className="max-w-lg space-y-3 sm:mx-auto sm:text-center">
//                 <h3 className="text-cyan-400 font-semibold">Contact</h3>
//                 <p className="text-white text-3xl font-semibold sm:text-4xl">
//                   Get in touch
//                 </p>
//                 <p className="text-gray-300">
//                   We’d love to hear from you! Please fill out the form below.
//                 </p>
//               </div>
//               <div className="mt-12 mx-auto p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
//                 <form
//                   onSubmit={(e) => e.preventDefault()}
//                   className="space-y-5"
//                 >
//                   <div>
//                     <label className="font-medium">Full name</label>
//                     <input
//                       type="text"
//                       required
//                       className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
//                     />
//                   </div>
//                   <div>
//                     <label className="font-medium">Email</label>
//                     <input
//                       type="email"
//                       required
//                       className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
//                     />
//                   </div>
//                   <div>
//                     <label className="font-medium">Phone number</label>
//                     <div className="relative mt-2">
//                       <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
//                         <select className="text-sm bg-transparent outline-none rounded-lg h-full">
//                           <option>US</option>
//                           <option>ES</option>
//                           <option>MR</option>
//                         </select>
//                       </div>
//                       <input
//                         type="number"
//                         placeholder="+1 (555) 000-000"
//                         required
//                         className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="font-medium">Message</label>
//                     <textarea
//                       required
//                       className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
//                     ></textarea>
//                   </div>
//                   <button className="w-full px-4 py-2 text-white font-medium bg-[#1d2e05]-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
//           style={{
//             background:
//               "linear-gradient(106.89deg, #f4fee7 0%, #d3f99d 25%, #9de635 50%, #4f7c0f 75%, #395314 100%)",
//           }}
//         ></div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Headerts from "../Navcomp/Headert";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div>
      <Headerts />
      <main className="relative py-28 bg-[#395314]">
        <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
          <div className="flex flex-wrap">
            <div className="w-full  lg:w-1/2 px-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.95373631531837!3d-37.816279579751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d3c7e0b0a29b!2sGoogle!5e0!3m2!1sen!2sus!4v1624255363351!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "22px" }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
                border-radius="22px"
              ></iframe>
            </div>
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 px-4">
              <div className="max-w-lg space-y-3 sm:mx-auto sm:text-center">
                <h3 className="text-white text-2xl font-semibold">Contact</h3>
                <p className="text-white text-3xl font-semibold sm:text-4xl">
                  Get in touch
                </p>
                <p className="text-gray-300">
                  We’d love to hear from you! Please fill out the form below.
                </p>
                <div className="flex justify-center space-x-6 mt-4">
                  <a href="tel:+15550000000" className="text-white">
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                    <span className="ml-2">(555) 000-0000</span>
                  </a>
                </div>
                <div className="flex justify-center space-x-6 mt-4">
                  <a href="https://facebook.com" className="text-white">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="https://twitter.com" className="text-white">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a href="https://instagram.com" className="text-white">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a href="https://linkedin.com" className="text-white">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </div>
              </div>
              <div className="mt-12 mx-auto p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div>
                    <label className="font-medium">Full name</label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Phone number</label>
                    <div className="relative mt-2">
                      <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                        <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                          <option>US</option>
                          <option>ES</option>
                          <option>MR</option>
                        </select>
                      </div>
                      <input
                        type="number"
                        placeholder="+1 (555) 000-000"
                        required
                        className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-medium">Message</label>
                    <textarea
                      required
                      className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    ></textarea>
                  </div>
                  <button className="w-full px-4 py-2 text-white font-medium bg-[#65A30D]  rounded-lg duration-150">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, #f4fee7 0%, #d3f99d 25%, #9de635 50%, #4f7c0f 75%, #395314 100%)",
          }}
        ></div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
