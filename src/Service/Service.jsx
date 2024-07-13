import React from "react";

const services = [
  {
    title: "Visual Effects",
    description: [
      "Rotoscoping",
      "Keying",
      "Paint",
      "Compositing",
      "Effect (FX) creation",
      "Match moving",
      "Cleanup",
      "Environment creation",
    ],
    icon: "🎥",
    link: "/vfx",
  },
  {
    title: "Graphic Design",
    description: [
      "Visiting cards",
      "Logo design",
      "Stationery design",
      "Label design",
      "Book cover design",
      "Brochure",
      "Photo retouching",
      "Website design",
    ],
    icon: "🎨",
    link: "/graphicdesigner",
  },
];

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="relative bg-[#CA8A04] hover:bg-gray-500 transition-colors duration-300 rounded-lg p-8 shadow-lg text-center flex flex-col items-center hover:border-black hover:border-2">
      <div className="flex items-center mb-6 text-white">
        <div className="text-4xl mr-4">{icon}</div>
        <h3 className="text-4xl font-bold">{title}</h3>
      </div>
      <ul className="text-2xl text-white text-left list-disc pl-5">
        {description.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
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
            link={service.link}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Services;
