
import React, { useState, useEffect } from "react";
import video1 from "../vidovfx/smoke01.mp4";
import video2 from "../vidovfx/smoke02.mp4";
import video3 from "../vidovfx/pyro and dust.mp4";
import video4 from "../vidovfx/water_and_ripples.mp4";
import video5 from "../vidovfx/snow01.mp4";
import video6 from "../vidovfx/dust.mp4";
import video7 from "../vidovfx/rain_and_destruction01.mp4";
import video8 from "../vidovfx/rain_and_destruction02.mp4";
import video9 from "../vidovfx/snow_dust.mp4";

const videos = [
  {
    src: video1,
    title: "The porter show",
    description: "Smoke",
  },
  {
    src: video2,
    title: "The porter show",
    description: "Smoke",
  },
  {
    src: video3,
    title: "Personal",
    description: "Pyro and Dust",
  },
  {
    src: video4,
    title: "Dino Ranch Show",
    description: "Water and Ripples",
  },
  {
    src: video5,
    title: "Dino Ranch Show",
    description: "Snow",
  },
  {
    src: video6,
    title: "Dino Ranch Show",
    description: "Dust",
  },
  {
    src: video7,
    title: "The Fall of the House of Usher",
    description: "Rain and Destruction",
  },
  {
    src: video8,
    title: "The Fall of the House of Usher",
    description: "Rain and Destruction",
  },
  {
    src: video9,
    title: "Dino Ranch Show",
    description: "Snow Dust",
  },
];

const VFXHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black text-white h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={videos[currentIndex].src}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-center items-center"></div>

        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-end  pb-16 sm:pb-32 md:pb-[2rem] px-4 md:px-20 md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-Arial text-[#CA8A04] font-bold mb-4">
            {videos[currentIndex].title}
          </h1>
          <p className="text-lg md:text-base lg:text-2xl mb-8">
            {videos[currentIndex].description}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 766px) {
          .absolute.inset-0.flex.flex-col.items-center.justify-end.sm\\:pb-32.md\\:pb-\\[2rem\\].px-4.md\\:px-20.md\\:items-start.text-center.md\\:text-left {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default VFXHero;
