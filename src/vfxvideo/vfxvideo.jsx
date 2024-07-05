import React, { useState } from "react";

// Import images instead of videos
import poster1 from "../assets/theporter1.jpg";
import poster2 from "../assets/raone.jpg";
import poster3 from "../assets/thefall1.png";
import poster4 from "../assets/nagin.jpg";
import poster5 from "../assets/WEDNESDAY.jpg";
import poster6 from "../assets/dino1.jpg";

const posterData = [
  { id: 1, title: "THE PORTER SHOW", src: poster1 },
  { id: 2, title: "RAONE", src: poster2 },
  { id: 3, title: "THE FALL OF THE HOUSE OF USHER", src: poster3 },
  { id: 4, title: "NAGIN", src: poster4 },
  { id: 5, title: "WEDNESDAY", src: poster5 },
  { id: 6, title: "DINO RANCH SHOW", src: poster6 },
];

const Vfx = () => {
  return (
    <div className="container bg-black mx-auto pb-12">
      <h2 className="text-4xl pt-36 font-bold mb-8 text-center text-[#CA8A04]">
        VFX Poster Gallery
      </h2>
      <div className="mx-auto max-w-3xl mb-6 text-center">
        <p className="text-lg py-16 text-white">
          Welcome to my VFX portfolio. Here you'll find a collection of my work
          showcasing various visual effects techniques and animations. Each
          poster represents a unique project, demonstrating my skills in creating
          realistic and captivating visual effects. Enjoy exploring!
        </p>
      </div>
      <div className="grid grid-cols-1 px-7 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posterData.map((poster) => (
          <div
            key={poster.id}
            className="relative bg-white rounded-lg overflow-hidden shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="relative pb-[180%]">
              {/* Maintain 16:9 aspect ratio */}
              <img
                src={poster.src}
                alt={poster.title}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {poster.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vfx;
