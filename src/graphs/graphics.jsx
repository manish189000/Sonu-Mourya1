import React from "react";
import items1 from "../graphicvideophopdf/Book cover template (7 by 11).jpg";
import items2 from "../graphicvideophopdf/fitness manual.pdf";
import items3 from "../graphicvideophopdf/Future FX Logo.mp4";
import items4 from "../graphicvideophopdf/Harmanjeet Kaur_Trifold brochure.pdf";
import items5 from "../graphicvideophopdf/kerela art.jpeg";
import items6 from "../graphicvideophopdf/Photo retouching.jpg";
import items7 from "../graphicvideophopdf/Santizer Trifold Brochure.pdf";
import items8 from "../graphicvideophopdf/Screen Shot 2020-10-06 at 10.49.48 PM.png";
import items9 from "../graphicvideophopdf/sonu.pdf";
import items10 from "../graphicvideophopdf/sonu_mourya.jpg";
import items11 from "../graphicvideophopdf/Sonu_Mourya_Postcard.pdf";
import items12 from "../graphicvideophopdf/Tri_fold_brochure (1).pdf";
import items13 from "../graphicvideophopdf/Vip Brochure.pdf";
import items14 from "../graphicvideophopdf/Website Design For B&B 1 April.pdf";
import pdfThumbnail1 from "../graphicvideophopdf/pdf1.png";
import pdfThumbnail2 from "../graphicvideophopdf/pdf2.png";
import pdfThumbnail3 from "../graphicvideophopdf/pdf3.png";
import pdfThumbnail4 from "../graphicvideophopdf/pdf4.png";
import pdfThumbnail5 from "../graphicvideophopdf/pdf5.png";
import pdfThumbnail6 from "../graphicvideophopdf/pdf6.png";
import pdfThumbnail7 from "../graphicvideophopdf/pdf7.png";
import pdfThumbnail8 from "../graphicvideophopdf/pdf8.png";

const items = [
  { src: items1, type: "image", title: "Book Cover Template" },
  {
    src: items2,
    type: "pdf",
    title: "Fitness Manual",
    thumbnail: pdfThumbnail1,
  },
  { src: items3, type: "video", title: "Future FX Logo" },
  {
    src: items4,
    type: "pdf",
    title: "Trifold Brochure",
    thumbnail: pdfThumbnail2,
  },
  { src: items5, type: "image", title: "Kerela Art" },
  { src: items6, type: "image", title: "Photo Retouching" },
  {
    src: items7,
    type: "pdf",
    title: "Sanitizer Trifold Brochure",
    thumbnail: pdfThumbnail3,
  },
  { src: items8, type: "image", title: "Screen Shot" },
  { src: items9, type: "pdf", title: "Sonu PDF", thumbnail: pdfThumbnail4 },
  { src: items10, type: "image", title: "Sonu Mourya" },
  {
    src: items11,
    type: "pdf",
    title: "Sonu Mourya Postcard",
    thumbnail: pdfThumbnail5,
  },
  {
    src: items12,
    type: "pdf",
    title: "Tri Fold Brochure",
    thumbnail: pdfThumbnail6,
  },
  {
    src: items13,
    type: "pdf",
    title: "VIP Brochure",
    thumbnail: pdfThumbnail7,
  },
  {
    src: items14,
    type: "pdf",
    title: "Website Design For B&B",
    thumbnail: pdfThumbnail8,
  },
];

const GalleryItem = ({ item }) => {
  const commonClasses =
    "w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105";

  if (item.type === "image") {
    return <img src={item.src} alt="Gallery Item" className={commonClasses} />;
  } else if (item.type === "video") {
    return (
      <video controls className={commonClasses}>
        <source src={item.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  } else if (item.type === "pdf") {
    return (
      <a
        href={item.src}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative group"
      >
        <img
          src={item.thumbnail}
          alt="PDF Thumbnail"
          className={commonClasses}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-bold">View PDF</span>
        </div>
      </a>
    );
  }
  return null;
};

const Graphics = () => {
  return (
    <div className="container mx-auto bg-black px-4 py-11">
      <div className="text-center mb-8">
        <h1 className="text-3xl  text-white  pt-24 font-bold mb-2">
          Welcome to the Graphics{" "}
          <span className="text-[#CA8A04]"> design Gallery</span>
        </h1>
        <p className="text-lg text-white">
          Explore our portfolio showcasing various graphic designs, videos, and
          PDFs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border p-2 rounded-lg shadow-lg h-64 w-full flex flex-col justify-between group transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="flex-grow overflow-hidden">
              <GalleryItem item={item} />
            </div>
            <p className="mt-2 text-center text-sm text-[#CA8A04]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graphics;
