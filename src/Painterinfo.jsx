// // import { useState } from "react";

// // const Painterinfo = () => {
// //   // Features and state for video pop-up remain unchanged...

// //   // Artist and drawing information
// //   const artist = {
// //     name: "Emily Smith",
// //     bio: "Emily Smith is a contemporary painter known for her vibrant and expressive abstract artworks...",
// //     style: "Abstract Expressionism",
// //     notableWorks: [
// //       {
// //         title: "Eternal Sunshine",
// //         year: 2023,
// //         description:
// //           "An abstract painting that captures the essence of joy and optimism...",
// //       },
// //       {
// //         title: "Whispers of the Wind",
// //         year: 2022,
// //         description:
// //           "A mesmerizing composition that evokes a sense of tranquility and movement...",
// //       },
// //       // Add more notable works as needed...
// //     ],
// //   };

// //   // Additional drawing information
// //   const drawings = [
// //     {
// //       title: "Sunset on the Horizon",
// //       imageUrl: "https://example.com/sunset-drawing.jpg",
// //       description: "A beautiful depiction of a sunset over the ocean...",
// //     },
// //     {
// //       title: "Dancing in the Rain",
// //       imageUrl: "https://example.com/dancing-rain-drawing.jpg",
// //       description:
// //         "An expressive portrayal of joy amidst a stormy atmosphere...",
// //     },
// //     // Add more drawings as needed...
// //   ];

// //   return (
// //     <section>
// //       <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex">
// //         {/* Existing content remains unchanged... */}
// //       </div>

// //       {/* Video pop-up component remains unchanged... */}

// //       {/* Artist and drawing information */}
// //       <div className="max-w-screen-xl mx-auto px-4 py-10 text-gray-600 md:px-8">
// //         <h2 className="text-2xl text-gray-800 font-semibold mb-4">
// //           About the Artist
// //         </h2>
// //         <p className="text-lg text-gray-700 mb-4">{artist.bio}</p>
// //         <p className="text-lg text-gray-700 mb-4">Style: {artist.style}</p>
// //         <h3 className="text-xl text-gray-800 font-semibold mb-2">
// //           Notable Works
// //         </h3>
// //         <ul className="list-disc pl-5">
// //           {artist.notableWorks.map((work, index) => (
// //             <li key={index}>
// //               <p className="text-gray-700">
// //                 <span className="font-semibold">{work.title}</span> ({work.year}
// //                 ): {work.description}
// //               </p>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       <div className="max-w-screen-xl mx-auto px-4 py-10 text-gray-600 md:px-8">
// //         <h2 className="text-2xl text-gray-800 font-semibold mb-4">
// //           Featured Drawings
// //         </h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {drawings.map((drawing, index) => (
// //             <div key={index} className="rounded-lg overflow-hidden shadow-lg">
// //               <img
// //                 src={drawing.imageUrl}
// //                 alt={drawing.title}
// //                 className="w-full"
// //               />
// //               <div className="p-4">
// //                 <h3 className="text-lg font-semibold mb-2">{drawing.title}</h3>
// //                 <p className="text-gray-700">{drawing.description}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Painterinfo;

import { useState } from "react";

const Painterinfo = () => {
  const features = [
    {
      name: "Trusted",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Over 50+ videos",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "400 ratings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const [isVideoPoppedUp, setVideoPopUp] = useState(false);

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
          <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-x-2 text-gray-500 text-sm"
              >
                {item.icon}
                {item.name}
              </div>
            ))}
          </div>
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Explore sought-after careers in painting and master cutting-edge
            drawing skills.
          </h1>
          <p className="max-w-xl mx-auto xl:mx-0">
            Uncover the origins of artistic inspiration and the essence of
            creative excellence, revealing the full spectrum of your talent.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-[#65A30D]   rounded-lg md:inline-flex"
            >
              Browse courses
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
            >
              Get access
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="rounded-lg"
              alt=""
            />
            <button
              className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-[#65A30D] ring-offset-2 focus:ring text-white"
              onClick={() => setVideoPopUp(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 m-auto"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isVideoPoppedUp ? (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center">
          <div
            className="absolute inset-0 w-full h-full bg-black/50"
            onClick={() => setVideoPopUp(false)}
          ></div>
          <div className="px-4 relative">
            <button
              className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => setVideoPopUp(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 m-auto"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            <video
              className="rounded-lg w-full max-w-2xl"
              controls
              autoPlay={true}
            >
              <source
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/FloatUI.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Painterinfo;

// import { useState } from "react";

// const Painterinfo = () => {
//   const features = [
//     {
//       name: "Experienced",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           className="w-5 h-5"
//         >
//           <path
//             fillRule="evenodd"
//             d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: "Over 100 artworks",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           className="w-5 h-5"
//         >
//           <path
//             fillRule="evenodd"
//             d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: "500+ positive reviews",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           className="w-5 h-5"
//         >
//           <path
//             fillRule="evenodd"
//             d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//   ];

//   const [isVideoPoppedUp, setVideoPopUp] = useState(false);

//   return (
//     <section>
//       <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex">
//         <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
//           <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
//             {features.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center gap-x-2 text-gray-500 text-sm"
//               >
//                 {item.icon}
//                 {item.name}
//               </div>
//             ))}
//           </div>
//           <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
//             Discover the Art of Drawing with Expert Guidance
//           </h1>
//           <p className="max-w-xl mx-auto xl:mx-0">
//             Join our community and improve your drawing skills with the help of
//             experienced artists. Learn various techniques, explore different
//             styles, and get inspired by over 100+ artworks.
//           </p>
//           <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
//             <a
//               href="javascript:void(0)"
//               className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex"
//             >
//               View Artworks
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//             <a
//               href="javascript:void(0)"
//               className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
//             >
//               Get Started
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>
//         <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1548943487-a2e4d6c3b890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//               className="rounded-lg"
//               alt="Artwork"
//             />
//             <button
//               className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-blue-500 hover:bg-blue-600 ring-offset-2 focus:ring text-white"
//               onClick={() => setVideoPopUp(true)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-6 h-6 m-auto"
//               >
//                 <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       {isVideoPoppedUp ? (
//         <div className="fixed inset-0 w-full h-full flex items-center justify-center">
//           <div
//             className="absolute inset-0 w-full h-full bg-black/50"
//             onClick={() => setVideoPopUp(false)}
//           ></div>
//           <div className="px-4 relative">
//             <button
//               className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
//               onClick={() => setVideoPopUp(false)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-5 h-5 m-auto"
//               >
//                 <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
//               </svg>
//             </button>
//             <video
//               className="rounded-lg w-full max-w-2xl"
//               controls
//               autoPlay={true}
//             >
//               <iframe
//                 className="rounded-lg w-full max-w-2xl"
//                 src="https://www.youtube.com/embed/Uc5ufcPDXkI?autoplay=1"
//                 allowFullScreen
//               ></iframe>
//             </video>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </section>
//   );
// };

// export default Painterinfo;
