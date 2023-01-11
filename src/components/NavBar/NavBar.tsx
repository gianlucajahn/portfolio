import React, { useContext } from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import { store } from "../../App";
import scroll from "../../utils/helpers/scroll";

export default function NavBar() {
  const [state, dispatch] = useContext(store);

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
      className={`${state.darkmode ? "dark-nav" : "light-nav"}`}
    >
      <img
        onClick={(e) => scroll("hero")}
        src={require("../../assets/images/icon.jpg")}
      />
      <h3 className={`first ${state.darkmode ? "dark-anchor" : "light-anchor"}`} onClick={(e) => scroll("about-me")}>
        {state.language === "english" ? "Über mich" : "About Me"}
      </h3>
      <h3 className={`${state.darkmode ? "dark-anchor" : "light-anchor"}`} onClick={(e) => scroll("portfolio")}>Portfolio</h3>
      <h3 className={`${state.darkmode ? "dark-anchor" : "light-anchor"}`} onClick={(e) => scroll("skills")}>Skills</h3>
      <h3 className={`${state.darkmode ? "dark-anchor" : "light-anchor"}`} onClick={(e) => scroll("resume")}>
        {state.language === "english" ? "Lebenslauf" : "Resume"}
      </h3>
      <button
        className="btn-nav"
        type="button"
        onClick={(e) => scroll("contact")}
      >
        {state.language === "english" ? "Kontakt" : "Contact"}
      </button>
    </motion.nav>
  );
}
