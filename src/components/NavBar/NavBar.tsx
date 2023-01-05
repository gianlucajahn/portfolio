import React, { useContext } from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import { store } from "../../App";

export default function NavBar() {
  const [state, dispatch] = useContext(store);

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
    >
      <img src={require("../../assets/images/icon.jpg")} />
      <h3 className="first">{state.language === "english" ? "Über mich" : "About Me"}</h3>
      <h3>Portfolio</h3>
      <h3>Skills</h3>
      <h3>{state.language === "english" ? "Lebenslauf" : "Curriculum"}</h3>
      <button className="btn-nav" type="button">
        {state.language === "english" ? "Kontakt" : "Contact"}
      </button>
    </motion.nav>
  );
}
