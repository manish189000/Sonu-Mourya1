import React from "react";

const ArtistPortfolio = () => {
  const awardsData = [
    {
      title: "Best Drawing Award",
      description: "Awarded for exceptional skill and creativity in drawing.",
      date: "June 2023",
      icon: "🎨",
    },
    {
      title: "Artist of the Year",
      description:
        "Recognized for outstanding contributions to the art community.",
      date: "December 2022",
      icon: "🏆",
    },
    {
      title: "Most Innovative Artist",
      description:
        "Awarded for pushing the boundaries of traditional art techniques.",
      date: "August 2022",
      icon: "🚀",
    },
    {
      title: "Excellence in Portraiture",
      description: "For mastery in capturing the essence of human subjects.",
      date: "April 2022",
      icon: "👩‍🎨",
    },
    {
      title: "Rising Star Award",
      description: "Recognizing promising talent in the art industry.",
      date: "February 2022",
      icon: "⭐",
    },
    // Add more awards as needed
  ];

  return (
    <div className="container mx-auto py-9 px-4">
      <div className="mt-8">
        <h2 className="text-2xl font-bold  flex py-2  justify-center mb-4">
          Awards & Recognition
        </h2>
        {/* Centering container */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 flex items-center transition duration-300 ease-in-out hover:bg-[#65A30D]"
              >
                <div className="mr-4 text-4xl">{award.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {award.description}
                  </p>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-yellow-500 mr-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-gray-600">{award.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add more sections as needed */}
    </div>
  );
};

export default ArtistPortfolio;
