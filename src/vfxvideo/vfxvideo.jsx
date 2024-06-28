// src/components/VfxResponse.jsx
import React, { useState } from "react";

import video1 from "../vidovfx/smoke01.mp4";
import video2 from "../vidovfx/smoke02.mp4";
import video3 from "../vidovfx/rain_and_destruction01.mp4";
import video4 from "../vidovfx/rain_and_destruction02.mp4";
import video5 from "../vidovfx/pyro and dust.mp4";
import video6 from "../vidovfx/dust.mp4";
import video7 from "../vidovfx/snow_dust.mp4";
import video8 from "../vidovfx/snow01.mp4";
import video9 from "../vidovfx/water_and_ripples.mp4";

const videoData = [
  { id: 1, title: "Smoke01- smoke | The porter show", src: video1 },
  {
    id: 2,
    title: " Smoke02- smoke | the porter show",
    src: video2,
  },
  {
    id: 3,
    title:
      " Rain and destruction01 - Rain and destruction | THE FALL OF THE HOUSE OF USHER ",
    src: video3,
  },
  {
    id: 4,
    title:
      "Rain and destruction02- Rain and destruction | THE FALL OF THE HOUSE OF USHER",
    src: video4,
  },
  { id: 5, title: "Pyro- pyro simulation | personal", src: video5 },
  { id: 6, title: " Dust- dust | dino ranch show", src: video6 },
  { id: 7, title: " Snowdust- snow dust | dino ranch show", src: video7 },
  {
    id: 8,
    title: " Snow01- snow dust | dino ranch show",
    src: video8,
  },
  {
    id: 9,
    title: "Water and ripple- water and ripples | Dino ranch show",
    src: video9,
  },
];

const Vfx = () => {
  const [playing, setPlaying] = useState(Array(videoData.length).fill(false));

  const togglePlayPause = (index) => {
    const videoElement = document.getElementById(`video-${index}`);
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
    setPlaying((prev) => {
      const newPlaying = [...prev];
      newPlaying[index] = !newPlaying[index];
      return newPlaying;
    });
  };

  const handleFullScreen = (index) => {
    const videoElement = document.getElementById(`video-${index}`);
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen();
    }
  };

  return (
    <div className="containe bg-black mx-auto  pb-12">
      <h2 className="text-4xl pt-36 font-bold mb-8 text-center text-[#CA8A04]">
        VFX Video Gallery
      </h2>
      <div className="mx-auto max-w-3xl mb-6 text-center">
        <p className="text-lg  py-16 text-white">
          Welcome to my VFX portfolio. Here you'll find a collection of my work
          showcasing various visual effects techniques and animations. Each
          video represents a unique project, demonstrating my skills in creating
          realistic and captivating visual effects. Enjoy exploring!
        </p>
      </div>
      <div className="grid grid-cols-1 px-7 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoData.map((video, index) => (
          <div
            key={video.id}
            className="relative bg-white rounded-lg overflow-hidden shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="relative pb-[56.25%]">
              {" "}
              {/* Maintain 16:9 aspect ratio */}
              <video
                id={`video-${index}`}
                controls
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center space-x-2">
                <button
                  className="p-2 rounded-full bg-[#CA8A04]  text-white hover:bg-[#CA8A04] transition-colors duration-300"
                  onClick={() => togglePlayPause(index)}
                >
                  {playing[index] ? (
                    // Pause Icon
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 9v6m4-6v6m1-6H9m4 6h-1M12 3v18M8 5h8m-8 6h8m-8 4h8"
                      />
                    </svg>
                  ) : (
                    // Play Icon
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-4.426-2.553A1 1 0 009 9.553v5.894a1 1 0 001.326.947l4.426-2.553a1 1 0 000-1.788z"
                      />
                    </svg>
                  )}
                </button>
                <button
                  className="p-2 rounded-full bg-[#CA8A04] text-white hover:bg-[#CA8A04] transition-colors duration-300"
                  onClick={() => handleFullScreen(index)}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.75-4.75M10 15L5.25 19.75M10 10V5.25M10 10H5.25M15 15h4.75M15 15v4.75"
                    />
                  </svg>
                </button>
                <a
                  href={video.src}
                  download
                  className="p-2 rounded-full bg-[#CA8A04] text-white hover:bg-[#CA8A04] transition-colors duration-300"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 12h16M4 12l4-4M4 12l4 4m4 4V4m4 4h4m-4 0l4 4m0-4l-4 4"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vfx;
