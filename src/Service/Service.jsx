import React, { useState } from "react";

const services = [
  {
    title: "Visual Effects",
    description:
      "High-quality visual effects for films, games, and commercials that bring your vision to life.",
    icon: "🎥",
    subcategories: [
      "Rotoscoping: Tracing over live-action footage to create realistic motion.",
      "Keying: Removing or isolating a specific color or range of colors (often green or blue) to overlay different backgrounds or elements.",
      "Paint: Touching up or altering specific areas of footage frame-by-frame.",
      "Compositing: Combining visual elements from separate sources into a single image or scene.",
      "Effect (FX) creation: Generating special effects such as explosions, fire, or supernatural occurrences.",
      "Match moving: Integrating computer-generated imagery (CGI) elements seamlessly into live-action footage by tracking camera movements.",
      "Cleanup: Removing unwanted elements or imperfections from footage.",
      "Environment creation: Designing and constructing virtual environments to replace or enhance real-world settings.",
    ],
    icon: "🎥",
    link: "/vfx",
  },
  {
    title: "Graphic Design",
    description:
      "Creative and professional graphic design services for branding, marketing materials, and more.",
    icon: "🎨",
    subcategories: [
      "Visiting cards: Designing personalized cards used for professional networking.",
      "Logo design: Creating unique and recognizable symbols that represent businesses or organizations.",
      "Stationery design: Designing coordinated sets of paper products like letterheads and envelopes.",
      "Label design: Crafting distinctive labels for products or packaging.",
      "Book cover design: Designing covers that visually represent the content and attract readers.",
      "Brochure: Designing informative booklets or pamphlets used for marketing or information dissemination.",
      "Photo retouching: Enhancing or altering digital images to improve their appearance or convey a specific message.",
      "Website design: Creating visually appealing and functional layouts for websites, incorporating elements like navigation, typography, and imagery.",
    ],
    link: "/graphicdesigner",
  },
];

const ServiceCard = ({ title, description, icon, subcategories }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative bg-[#CA8A04] hover:bg-gray-500 transition-colors duration-300 rounded-lg p-6 shadow-lg text-center flex flex-col items-center hover:border-black hover:border-2">
      <div className="text-4xl mb-4 text-white">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2 hover:border-black hover:border-2">{title}</h3>
      <p className="text-white mb-4 hover:border-black hover:border-2">{description}</p>
      {expanded && (
        <div className="absolute left-0 right-0 bg-gray-800 rounded-lg p-4 text-left text-white z-10">
          <ul className="list-disc pl-4">
            {subcategories.map((subcategory, index) => (
              <li key={index}>{subcategory}</li>
            ))}
          </ul>
          <button
            onClick={toggleExpand}
            className="absolute top-0 right-0 mt-2 mr-2 px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors duration-300"
          >
            Close
          </button>
        </div>
      )}
      <button
        onClick={toggleExpand}
        className="mt-auto inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-300 hover:border-black hover:border-2"
      >
        Show Subcategories
      </button>
    </div>
  );
};

const Services = () => (
  <div className="py-12 bg-black">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold font-Arial text-center py-6 text-[#CA8A04]">
        Our Services
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            subcategories={service.subcategories}
            link={service.link}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Services;
