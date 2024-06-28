import React from "react";

const services = [
  {
    title: "Visual Effects",
    description:
      "High-quality visual effects for films, games, and commercials that bring your vision to life.",
    icon: "🎥",
    link: "/vfx",
  },
  {
    title: "Motion Graphics",
    description:
      "Dynamic and engaging motion graphics for videos, presentations, and social media.",
    icon: "📽️",
    link: "/vfx",
  },
  {
    title: "Graphic Design",
    description:
      "Creative and professional graphic design services for branding, marketing materials, and more.",
    icon: "🎨",
    link: "/graphicdesigner",
  },
  //   {
  //     title: "Logo Design",
  //     description:
  //       "Unique and memorable logo designs that reflect your brand's identity and values.",
  //     icon: "🔖",
  //     link: "/logo-design",
  //   },
  //   {
  //     title: "3D Animation",
  //     description:
  //       "Stunning 3D animations that captivate audiences and bring stories to life.",
  //     icon: "🎬",
  //     link: "/3d-animation",
  //   },
  //   {
  //     title: "Illustrations",
  //     description:
  //       "Custom illustrations that enhance your brand and convey your message effectively.",
  //     icon: "🖌️",
  //     link: "/illustrations",
  //   },
  //   {
  //     title: "Web Design",
  //     description:
  //       "Beautiful and responsive web designs that ensure a seamless user experience across all devices.",
  //     icon: "💻",
  //     link: "/web-design",
  //   },
  //   {
  //     title: "Branding",
  //     description:
  //       "Comprehensive branding services that establish a strong and consistent brand identity.",
  //     icon: "🏷️",
  //     link: "/branding",
  //   },
  //   {
  //     title: "Print Design",
  //     description:
  //       "High-quality print design services for brochures, business cards, posters, and more.",
  //     icon: "🖨️",
  //     link: "/print-design",
  //   },
  {
    title: "Packaging Design",
    description:
      "Innovative packaging designs that make your products stand out on the shelves.",
    icon: "📦",
    link: "/graphicdesigner",
  },
];

const ServiceCard = ({ title, description, icon, link }) => (
  <div className="bg-purple-200  hover:bg-purple-300 transition-colors duration-300 rounded-lg p-6 shadow-lg text-center flex flex-col items-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-purple-800 mb-2">{title}</h3>
    <p className="text-purple-600 mb-4">{description}</p>
    <a
      href={link}
      className="mt-auto inline-block px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors duration-300"
    >
      Learn More
    </a>
  </div>
);

const Services = () => (
  <div className="py-12 bg-black">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold font-Arial text-center py-6 text-[#CA8A04]">
        Our Services
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
