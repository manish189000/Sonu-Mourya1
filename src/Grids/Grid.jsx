import React, { useState } from "react";
import Grid1 from "../assets/Grid1.jpg";
import Grid2 from "../assets/Grid2.jpg";
import Grid3 from "../assets/grid4.jpg";
import Grid4 from "../assets/Grid5.jpg";

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
    <div className="relative py-11 w-full mx-auto">
      <div className="flex overflow-hidden">
        {getDisplayedImages().map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Grid ${currentIndex + index + 1}`}
            className={`object-cover w-full sm:w-1/2 md:w-1/4 h-32 sm:h-48 md:h-64 ${
              index < 3 ? "mr-2" : "" // Add margin to the right of all images except the last one
            }`}
          />
        ))}
      </div>
      <button
        onClick={prevImage}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 bg-opacity-50 text-white p-2"
      >
        &lt;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 bg-opacity-50 text-white p-2"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
