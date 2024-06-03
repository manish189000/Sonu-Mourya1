import React, { useState } from "react";

// Import images
import G1 from "./assets/g1.jpg";
import G2 from "./assets/g2.jpg";
import G3 from "./assets/g3.jpg";
import G4 from "./assets/g4.jpg";
import G5 from "./assets/g5.jpg";
import G6 from "./assets/g6.jpg";
import G7 from "./assets/g7.jpg";
import G8 from "./assets/g8.jpg";
import G9 from "./assets/g9.jpg";
import G10 from "./assets/g10.jpg";
import G11 from "./assets/g11.jpg";
import G12 from "./assets/g12.jpg";
import G13 from "./assets/g13.jpg";
import G14 from "./assets/g14.jpg";
import G15 from "./assets/g15.jpg";
import G16 from "./assets/g16.jpg";
import G17 from "./assets/g17.jpg";
import G18 from "./assets/g18.jpg";
import G19 from "./assets/g19.jpg";
import G20 from "./assets/g20.jpg";
import G21 from "./assets/g21.jpg";
import G22 from "./assets/g22.jpg";
import G23 from "./assets/g23.jpg";
import G24 from "./assets/g24.jpg";
import G25 from "./assets/g25.jpg";
import G26 from "./assets/g26.jpg";
import G27 from "./assets/g27.jpg";
import G28 from "./assets/g28.jpg";
import G29 from "./assets/g29.jpg";
import G30 from "./assets/g30.jpg";

const ImageGallery = () => {
  // State to manage selected filter
  const [filter, setFilter] = useState("all");
  // State to manage lightbox
  const [lightboxImage, setLightboxImage] = useState(null);
  // State to manage pagination
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12; // 4 rows x 3 columns

  // Image data with filter categories, titles, and descriptions
  const images = [
    {
      src: G1,
      category: "nature",
      title: "Nature Image 1",
      description: "A beautiful view of nature.",
    },
    {
      src: G2,
      category: "nature",
      title: "Nature Image 2",
      description: "A beautiful view of nature.",
    },
    {
      src: G3,
      category: "city",
      title: "City Image 1",
      description: "A bustling city street.",
    },
    {
      src: G4,
      category: "city",
      title: "City Image 2",
      description: "A bustling city street.",
    },
    {
      src: G5,
      category: "city",
      title: "City Image 3",
      description: "A bustling city street.",
    },
    {
      src: G6,
      category: "nature",
      title: "Nature Image 3",
      description: "A beautiful view of nature.",
    },
    {
      src: G7,
      category: "nature",
      title: "Nature Image 4",
      description: "A beautiful view of nature.",
    },
    {
      src: G8,
      category: "nature",
      title: "Nature Image 5",
      description: "A beautiful view of nature.",
    },
    {
      src: G9,
      category: "nature",
      title: "Nature Image 6",
      description: "A beautiful view of nature.",
    },
    {
      src: G10,
      category: "city",
      title: "City Image 4",
      description: "A bustling city street.",
    },
    {
      src: G11,
      category: "city",
      title: "City Image 5",
      description: "A bustling city street.",
    },
    {
      src: G12,
      category: "city",
      title: "City Image 6",
      description: "A bustling city street.",
    },
    {
      src: G13,
      category: "nature",
      title: "Nature Image 7",
      description: "A beautiful view of nature.",
    },
    {
      src: G14,
      category: "nature",
      title: "Nature Image 8",
      description: "A beautiful view of nature.",
    },
    {
      src: G15,
      category: "nature",
      title: "Nature Image 9",
      description: "A beautiful view of nature.",
    },
    {
      src: G16,
      category: "city",
      title: "City Image 7",
      description: "A bustling city street.",
    },
    {
      src: G17,
      category: "city",
      title: "City Image 8",
      description: "A bustling city street.",
    },
    {
      src: G18,
      category: "city",
      title: "City Image 9",
      description: "A bustling city street.",
    },
    {
      src: G19,
      category: "nature",
      title: "Nature Image 10",
      description: "A beautiful view of nature.",
    },
    {
      src: G20,
      category: "nature",
      title: "Nature Image 11",
      description: "A beautiful view of nature.",
    },
    {
      src: G21,
      category: "nature",
      title: "Nature Image 12",
      description: "A beautiful view of nature.",
    },
    {
      src: G22,
      category: "city",
      title: "City Image 10",
      description: "A bustling city street.",
    },
    {
      src: G23,
      category: "city",
      title: "City Image 11",
      description: "A bustling city street.",
    },
    {
      src: G24,
      category: "city",
      title: "City Image 12",
      description: "A bustling city street.",
    },
    {
      src: G25,
      category: "nature",
      title: "Nature Image 13",
      description: "A beautiful view of nature.",
    },
    {
      src: G26,
      category: "nature",
      title: "Nature Image 14",
      description: "A beautiful view of nature.",
    },
    {
      src: G27,
      category: "nature",
      title: "Nature Image 15",
      description: "A beautiful view of nature.",
    },
    {
      src: G28,
      category: "city",
      title: "City Image 13",
      description: "A bustling city street.",
    },
    {
      src: G29,
      category: "city",
      title: "City Image 14",
      description: "A bustling city street.",
    },
    {
      src: G30,
      category: "city",
      title: "City Image 15",
      description: "A bustling city street.",
    },
  ];

  // Filtered images based on selected filter
  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  // Pagination logic
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  // Function to handle click on thumbnail
  const handleThumbnailClick = (imgSrc) => {
    setLightboxImage(imgSrc);
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Function to handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filter buttons */}
      <div className="mb-4">
        <button
          onClick={() => setFilter("all")}
          className="mr-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          All
        </button>
        <button
          onClick={() => setFilter("nature")}
          className="mr-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          Nature
        </button>
        <button
          onClick={() => setFilter("city")}
          className="mr-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          City
        </button>
        {/* Add more filter buttons as needed */}
      </div>
      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages.map((img, index) => (
          <div key={index} className="relative group">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-48 object-cover rounded-lg hover:filter hover:brightness-110 transition duration-300 cursor-pointer"
              onClick={() => handleThumbnailClick(img.src)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-sm font-bold">{img.title}</h3>
              <p className="text-xs">{img.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from(
          { length: Math.ceil(filteredImages.length / imagesPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded-full ${
                currentPage === i + 1
                  ? "bg-[#65A30D] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <img
              src={lightboxImage}
              alt="Lightbox"
              className="max-w-full h-auto"
              style={{ width: "600px", height: "400px", objectFit: "cover" }}
            />
            <button
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
