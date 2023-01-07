import React, { useContext } from "react";
import "./Projects.scss";
import { motion } from "framer-motion";
import { store } from "../../App";

export default function Projects() {
  const [state, dispatch] = useContext(store);

  return (
    <div className="projects-container">
      <div className="anchor" id="portfolio" />
      <h3 className="eyebrow">{state.language === "english" ? "Projekte" : "Projects"}</h3>
      <h1 className="heading">{state.language === "english" ? "Eine kleine Auswahl meiner Projekte." : "A small preview of my projects."}</h1>

      <div className="project-list">
        <a href="https://gianlucajahn.github.io/react-ecommerce-store/" className="ecom" target="_blank">
          <div className="tooltip upper ecom" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={require("../../assets/images/preview1.PNG")}
          />
        </a>

        <a href="https://gianlucajahn.github.io/CV-Application/" className="cv" target="_blank">
          <div className="tooltip upper cv" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={require("../../assets/images/preview4.PNG")}
          />
        </a>

        <a href="https://gianlucajahn.github.io/typescript-reddit-clone/" className="reddit lower" target="_blank">
          <div className="tooltip lower reddit" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={require("../../assets/images/preview3.PNG")}
          />
        </a>

        <a href="https://gianlucajahn.github.io/macOS-react/" className="mac lower" target="_blank">
          <div className="tooltip lower mac" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={require("../../assets/images/preview2.PNG")}
          />
        </a>
      </div>

      <a href="https://github.com/gianlucajahn" target="_blank" className="more">{state.language === "english" ? "Mehr anzeigen" : "Show More"}</a>
    </div>
  );
}
