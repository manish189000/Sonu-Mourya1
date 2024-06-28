import React from "react";
import { FaMagic, FaLightbulb, FaHandshake } from "react-icons/fa";

const ProjectsAndVision = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{ margin: "0 auto", padding: "70px 16px", maxWidth: "1200px" }}
      >
        <div style={{ marginBottom: "48px" }}>
          <h2
            className=" font-Arial text-[#CA8A04]"
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaMagic
              style={{
                height: "40px",
                width: "40px",
                color: "#CA8A04",
                marginRight: "8px",
                animation: "pulse 2s infinite",
              }}
            />
            Projects & Collaborations
          </h2>
          <p
            className="font-Arial"
            style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}
          >
            I have had the privilege of working on a diverse range of projects,
            from blockbuster films to indie productions, from corporate branding
            to creative campaigns. Each project is a unique challenge that fuels
            my creativity and drives me to deliver exceptional results.
            Collaborating with talented professionals and pushing creative
            boundaries is what I thrive on.
          </p>
        </div>
        <div>
          <h2
            className=" font-Arial   text-[#CA8A04]"
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaLightbulb
              style={{
                height: "40px",
                width: "40px",
                color: "#CA8A04",
                marginRight: "8px",
                animation: "bounce 2s infinite",
              }}
            />
            Vision & Mission
          </h2>
          <p
            className=" font-Arial"
            style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}
          >
            My mission is to transform ideas into visual masterpieces that
            resonate with audiences and elevate brands. I believe in the power
            of visuals to evoke emotions, tell stories, and create lasting
            impressions. With every project, my goal is to exceed expectations
            and deliver work that not only meets the brief but also inspires and
            delights.
          </p>
        </div>
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <h2
            className=" font-Arial  text-[#CA8A04]"
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaHandshake
              style={{
                height: "40px",
                width: "40px",
                color: "##CA8A04",
                marginRight: "8px",
                animation: "shake 7s infinite",
              }}
            />
            Let's Create Together
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}>
            Whether you're looking for a stunning visual effect for your next
            film, a captivating design for your brand, or anything in between,
            I’m here to bring your vision to life. Let’s collaborate and create
            something extraordinary together.
          </p>
        </div>
      </div>
    </div>
  );
};

const shakeKeyframes = `
  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translateX(-10px);
    }
    20%, 40%, 60%, 80% {
      transform: translateX(10px);
    }
  }
`;

const style = document.createElement("style");
style.innerHTML = shakeKeyframes;
document.head.appendChild(style);

export default ProjectsAndVision;
