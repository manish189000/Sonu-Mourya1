import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import p1 from "../assets/Vfx-hero.webp";
import p2 from "../assets/graphic-hero.webp";
import p4 from "../assets/vfx2-hero.webp";
import p6 from "../assets/graphic2-hero.webp";

function Hero() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([p1, p2, p4, p6]);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage < 3 ? selectedImage + 1 : 0
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-0 w-full h-[100vh]">
      <img
        className="w-full h-full object-cover brightness-50"
        src={allImages[selectedImage]}
        alt={`Image ${selectedImage + 1}`}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-opacity-50 rounded-md p-4 text-center">
          <h1 className="  font-bold text-white font-lato">
            <section className="relative">
              <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                  <div className="text-center">
                    <h2 className=" text-yellow-600 text-5xl font-Arial  font-bold text-center">
                      Discover the Magic VFX and Graphic Design
                    </h2>
                    <p className="max-w-2xl text-xl pt-4 font-mono mx-auto text-white">
                      Step into the world of stunning visual effects and
                      innovative graphic designs.
                    </p>
                  </div>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="justify-center items-center gap-x-3 sm:flex"
                  >
                    <button
                      className="flex items-center font-black font-Arial justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white bg-[#B84FFD] hover:bg-[#d9f99d] active:bg-[#d9f99d] duration-150 rounded-lg sm:mt-0 sm:w-auto"
                      onClick={() => navigate("/about")}
                    >
                      Get started
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
                    </button>
                  </form>
                  <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm"></div>
                </div>
              </div>
              <div
                className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                style={{
                  background:
                    "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, #000 15.74%, #000 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                }}
              ></div>
            </section>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
