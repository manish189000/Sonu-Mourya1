import { useEffect, useState } from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/P2.jpg";
import p4 from "../assets/p4.jpg";
import p6 from "../assets/p6.jpg";

function Hero() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([p1, p2, p4, p6]);

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
      <div className="absolute inset-0 flex items-center justify-center  p-4">
        <div className="  bg-opacity-50 rounded-md p-4 text-center">
          <h1 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white font-lato">
            <section className="relative">
              <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                  <div class="text-center">
                    <h2 class="text-lg md:text-xl   font-lato3 lg:text-2xl xl:text-5xl 2xl:text-6xl font-bold text-center">
                      Discover the Artistry: Painter's Portfolio
                    </h2>

                    <p class="max-w-2xl pt-4  font-light mx-auto text-white">
                      Dive into a world of vibrant colors, evocative strokes,
                      and boundless imagination.
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="justify-center items-center gap-x-3 sm:flex"
                  >
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-full px-3   text-xl  py-2 text-white bg-gray-700 focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
                    />
                    <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-[#65a30d] hover:[#d9f99d] active:[#d9f99d] duration-150 rounded-lg sm:mt-0 sm:w-auto">
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
                  <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                    <div className="flex">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                      </svg>
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                      </svg>
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                      </svg>
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                      </svg>
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                      </svg>
                    </div>
                    <p>
                      <span className="text-gray-100">5.0</span> by over 200
                      users
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                style={{
                  background:
                    "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                }}
              ></div>
            </section>
          </h1>
          {/* <div className="pt-6">
            <a
              href="javascript:void(0)"
              className="py-3 px-4 text-white bg-[#8e9250] hover:bg-[#8e9250] rounded-md shadow"
            >
              Get Started
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
