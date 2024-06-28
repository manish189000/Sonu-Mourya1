import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Vfx from "./Pages/Vfx";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Graphicdesigner from "./Pages/Graphicdesigner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="vfx" element={<Vfx />} />
          <Route path="graphicdesigner" element={<Graphicdesigner />} />
        </Routes>
        <ScrollToTop
          smooth
          color="white"
          style={{
            backgroundColor: "#CA8A04",
            padding: "6px",
            borderRadius: "50%",
          }}
          icon={<FontAwesomeIcon icon={faArrowUp} />}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
