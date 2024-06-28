import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const footerNavs = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/vfx",
      name: "Vfx",
    },
    {
      href: "/graphicdesigner",
      name: "Graphic Designer",
    },
    {
      href: "/contact",
      name: "Contact",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#000] via-[#000] to-[#1a1a1d]">
      <footer className="text-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
        <div className="max-w-lg sm:mx-auto sm:text-center">
          <h1 className="text-2xl font-Arial font-black ">Sonu Mourya</h1>
          <p className="leading-relaxed font-mono mt-2 text-[15px]">
            Our VFX and graphic design services bring your visions to life with
            stunning visuals and immersive effects. Whether it's for films,
            advertisements, or digital media, we combine cutting-edge technology
            with creative artistry to deliver extraordinary results. Let us
            transform your ideas into visually captivating experiences.
          </p>
        </div>
        <ul className="items-center font-Arial font-bold justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <li key={idx} className="hover:text-gray-300">
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 items-center justify-between sm:flex">
          <div className="mt-4 font-lato sm:mt-0">
            &copy; 2024 Sonu Mourya All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-700 hover:bg-purple-500 transition-transform transform hover:scale-110">
                <a href="https://twitter.com">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-white"
                    size="lg"
                  />
                </a>
              </li>
              <li className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-700 hover:bg-purple-500 transition-transform transform hover:scale-110">
                <a href="https://facebook.com">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-white"
                    size="lg"
                  />
                </a>
              </li>
              <li className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-700 hover:bg-purple-500 transition-transform transform hover:scale-110">
                <a href="https://instagram.com">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-white"
                    size="lg"
                  />
                </a>
              </li>
              <li className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-700 hover:bg-purple-500 transition-transform transform hover:scale-110">
                <a href="https://youtube.com">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="text-white"
                    size="lg"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
