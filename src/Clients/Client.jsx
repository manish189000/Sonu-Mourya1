import React from "react";
import Marquee from "react-fast-marquee";

const clients = [
  { name: "Redchillies.vfx" },
  { name: "Undercover Productions ltd" },
  { name: "Rocket science vfx" },
  { name: "Jamfilled. Media" },
  // Add more clients as needed
];

const OurClients = () => {
  return (
    <div>
      <style>
        {`
          @keyframes move {
            0% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(50px, 50px);
            }
            100% {
              transform: translate(0, 0);
            }
          }
          .bg-spray::before,
          .bg-spray::after {
            content: '';
            position: absolute;
            width: 200px;
            height: 200px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            filter: blur(50px);
            opacity: 0.5;
          }
          .bg-spray::before {
            top: -50px;
            left: -50px;
            animation: move 10s linear infinite;
          }
          .bg-spray::after {
            bottom: -50px;
            right: -50px;
            animation: move 10s linear infinite reverse;
          }
        `}
      </style>
      <div
        className="mainContainer  py-8 px-10 sm:py-10 sm:px-8 m480:px-4 w-full font-inter bg-spray"
        style={{
          background:
            "linear-gradient(135deg, #000000 25%, #000000 75%, #000000)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h2 className="text-3xl font-Arial  font-extrabold text-center text-[#CA8A04] mb-8">
        Part Of Projects
        </h2>
        <div className="parentlogo font-lato w-full mx-auto flex justify-center">
          <Marquee gradient={false} speed={50}>
            {clients.map((client, index) => (
              <div key={index} className="mx-8 flex flex-col items-center">
                <span className="text-xl font-bold text-white">
                  {client.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
