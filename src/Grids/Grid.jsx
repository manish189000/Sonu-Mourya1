// // // // import React, { useState } from "react";
// // // import Grid1 from "../assets/Grid1.jpg";
// // // import Grid2 from "../assets/Grid2.jpg";
// // // import Grid3 from "../assets/grid4.jpg";
// // // import Grid4 from "../assets/Grid5.jpg";

// // // // const images = [Grid1, Grid2, Grid3, Grid4];

// // // // const ImageCarousel = () => {
// // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // //   const nextImage = () => {
// // // //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// // // //   };

// // // //   const prevImage = () => {
// // // //     setCurrentIndex(
// // // //       (prevIndex) => (prevIndex - 1 + images.length) % images.length
// // // //     );
// // // //   };

// // // //   const getDisplayedImages = () => {
// // // //     const displayedImages = [];
// // // //     for (let i = 0; i < 4; i++) {
// // // //       displayedImages.push(images[(currentIndex + i) % images.length]);
// // // //     }
// // // //     return displayedImages;
// // // //   };

// // // //   return (
// // // //     <div className="relative py-11 w-full mx-auto">
// // // //       <div className="flex overflow-hidden">
// // // //         {getDisplayedImages().map((image, index) => (
// // // //           <img
// // // //             key={index}
// // // //             src={image}
// // // //             alt={`Grid ${currentIndex + index + 1}`}
// // // //             className={`object-cover w-full sm:w-1/2 md:w-1/4 h-32 sm:h-48 md:h-64 ${
// // // //               index < 3 ? "mr-2" : "" // Add margin to the right of all images except the last one
// // // //             }`}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //       <button
// // // //         onClick={prevImage}
// // // //         className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 bg-opacity-50 text-white p-2"
// // // //       >
// // // //         &lt;
// // // //       </button>
// // // //       <button
// // // //         onClick={nextImage}
// // // //         className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 bg-opacity-50 text-white p-2"
// // // //       >
// // // //         &gt;
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ImageCarousel;
// // // import React, { useState } from "react";
// // // // import Grid1 from "../assets/Grid1.jpg";
// // // // import Grid2 from "../assets/Grid2.jpg";
// // // // import Grid3 from "../assets/Grid3.jpg";
// // // // import Grid4 from "../assets/Grid4.jpg";

// // // // const images = [Grid1, Grid2, Grid3, Grid4];

// // // // const ImageCarousel = () => {
// // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // //   const nextImage = () => {
// // // //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// // // //   };

// // // //   const prevImage = () => {
// // // //     setCurrentIndex(
// // // //       (prevIndex) => (prevIndex - 1 + images.length) % images.length
// // // //     );
// // // //   };

// // // //   const getDisplayedImages = () => {
// // // //     const displayedImages = [];
// // // //     for (let i = 0; i < 4; i++) {
// // // //       displayedImages.push(images[(currentIndex + i) % images.length]);
// // // //     }
// // // //     return displayedImages;
// // // //   };

// // // //   return (
// // // //     <div className="relative py-11 w-full mx-auto max-w-7xl">
// // // //       <div className="flex justify-center overflow-hidden">
// // // //         {getDisplayedImages().map((image, index) => (
// // // //           <img
// // // //             key={index}
// // // //             src={image}
// // // //             alt={`Grid ${currentIndex + index + 1}`}
// // // //             className={`object-cover w-full sm:w-1/2 md:w-1/4 h-32 sm:h-48 md:h-64 rounded-lg transition-transform duration-300 ease-in-out ${
// // // //               index < 3 ? "mr-2" : "" // Add margin to the right of all images except the last one
// // // //             }`}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //       <button
// // // //         onClick={prevImage}
// // // //         className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700"
// // // //       >
// // // //         &lt;
// // // //       </button>
// // // //       <button
// // // //         onClick={nextImage}
// // // //         className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700"
// // // //       >
// // // //         &gt;
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ImageCarousel;

// // // import React, { useState } from "react";
// // // // import Grid1 from "../assets/Grid1.jpg";
// // // // import Grid2 from "../assets/Grid2.jpg";
// // // // import Grid3 from "../assets/Grid3.jpg";
// // // // import Grid4 from "../assets/Grid4.jpg";

// // // const images = [Grid1, Grid2, Grid3, Grid4];

// // // const ImageCarousel = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   const nextImage = () => {
// // //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// // //   };

// // //   const prevImage = () => {
// // //     setCurrentIndex(
// // //       (prevIndex) => (prevIndex - 1 + images.length) % images.length
// // //     );
// // //   };

// // //   const getDisplayedImages = () => {
// // //     const displayedImages = [];
// // //     for (let i = 0; i < 4; i++) {
// // //       displayedImages.push(images[(currentIndex + i) % images.length]);
// // //     }
// // //     return displayedImages;
// // //   };

// // //   return (
// // //     <div className="relative py-11 w-full mx-auto max-w-7xl">
// // //       <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
// // //         Graphic Design & VFX
// // //       </h2>
// // //       <div className="flex justify-center overflow-hidden">
// // //         {getDisplayedImages().map((image, index) => (
// // //           <img
// // //             key={index}
// // //             src={image}
// // //             alt={`Grid ${currentIndex + index + 1}`}
// // //             className={`object-cover w-full sm:w-1/2 md:w-1/4 h-32 sm:h-48 md:h-64 rounded-lg transition-transform duration-300 ease-in-out ${
// // //               index < 3 ? "mr-2" : "" // Add margin to the right of all images except the last one
// // //             }`}
// // //           />
// // //         ))}
// // //       </div>
// // //       <button
// // //         onClick={prevImage}
// // //         className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700"
// // //       >
// // //         &lt;
// // //       </button>
// // //       <button
// // //         onClick={nextImage}
// // //         className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700"
// // //       >
// // //         &gt;
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default ImageCarousel;

// // import React, { useState } from "react";
// // import Grid1 from "../assets/Grid1.jpg";
// // import Grid2 from "../assets/Grid2.jpg";
// // import Grid3 from "../assets/Grid2.jpg";
// // import Grid4 from "../assets/Grid2.jpg";

// // const images = [Grid1, Grid2, Grid3, Grid4];

// // const ImageCarousel = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const nextImage = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //   };

// //   const prevImage = () => {
// //     setCurrentIndex(
// //       (prevIndex) => (prevIndex - 1 + images.length) % images.length
// //     );
// //   };

// //   const getDisplayedImages = () => {
// //     const displayedImages = [];
// //     for (let i = 0; i < 4; i++) {
// //       displayedImages.push(images[(currentIndex + i) % images.length]);
// //     }
// //     return displayedImages;
// //   };

// //   return (
// //     <div className="relative py-11 w-full mx-auto max-w-7xl">
// //       <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
// //         Graphic Design & VFX
// //       </h2>
// //       <div className="flex justify-center overflow-hidden">
// //         {getDisplayedImages().map((image, index) => (
// //           <img
// //             key={index}
// //             src={image}
// //             alt={`Grid ${currentIndex + index + 1}`}
// //             className={`object-cover w-full sm:w-1/2 md:w-1/4 h-32 sm:h-48 md:h-64 rounded-lg transition-transform duration-300 ease-in-out ${
// //               index < 3 ? "mr-2" : "" // Add margin to the right of all images except the last one
// //             }`}
// //           />
// //         ))}
// //       </div>
// //       <button
// //         onClick={prevImage}
// //         className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700"
// //       >
// //         &lt;
// //       </button>
// //       <button
// //         onClick={nextImage}
// //         className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700"
// //       >
// //         &gt;
// //       </button>
// //     </div>
// //   );
// // };

// // export default ImageCarousel;

// import React, { useState } from "react";
// import Grid1 from "../assets/Grid1.jpg";
// import Grid2 from "../assets/Grid2.jpg";
// import Grid3 from "../assets/Grid2.jpg";
// import Grid4 from "../assets/Grid2.jpg";

// const images = [Grid1, Grid2, Grid3, Grid4];

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const getDisplayedImages = () => {
//     const displayedImages = [];
//     for (let i = 0; i < 4; i++) {
//       displayedImages.push(images[(currentIndex + i) % images.length]);
//     }
//     return displayedImages;
//   };

//   return (
//     <div className="relative py-11 w-full mx-auto max-w-7xl">
//       <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
//         Graphic Design & VFX
//       </h2>
//       <div className="flex justify-center overflow-hidden space-x-2">
//         {getDisplayedImages().map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Grid ${currentIndex + index + 1}`}
//             className="object-cover w-full sm:w-1/2 md:w-1/4 h-32 sm:h-48 md:h-64 rounded-lg transition-transform duration-300 ease-in-out"
//           />
//         ))}
//       </div>
//       <button
//         onClick={prevImage}
//         className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
//       >
//         &lt;
//       </button>
//       <button
//         onClick={nextImage}
//         className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
//       >
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default ImageCarousel;

import React, { useState } from "react";
import Grid1 from "../assets/Grid1.jpg";
import Grid2 from "../assets/vfx-grid.webp";
import Grid3 from "../assets/grid-graphic.webp";
import Grid4 from "../assets/Grid2.jpg";

const images = [Grid1, Grid2, Grid3, Grid4];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const getDisplayedImages = () => {
    const displayedImages = [];
    for (let i = 0; i < 4; i++) {
      displayedImages.push(images[(currentIndex + i) % images.length]);
    }
    return displayedImages;
  };

  return (
    <section className="bg-black ">
      <div className="relative py-11  w-full mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold mb-8 font-Arial text-[#CA8A04]">
          Graphic Design & VFX
        </h2>
        <div className="flex justify-center overflow-hidden space-x-2">
          {getDisplayedImages().map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Grid ${currentIndex + index + 1}`}
              className="object-cover w-full sm:w-1/2 md:w-1/4 h-32 sm:h-48 md:h-64 rounded-lg transition-transform duration-300 ease-in-out"
            />
          ))}
        </div>
        <button
          onClick={prevImage}
          className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-8 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-8 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ImageCarousel;
