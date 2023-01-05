import React from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
    >
      <img src={require("../../assets/images/icon.jpg")} />
      <h3 className="first">Über mich</h3>
      <h3>Portfolio</h3>
      <h3>Skills</h3>
      <h3>Lebenslauf</h3>
      <button className="btn-nav" type="button">
        Kontakt
      </button>
    </motion.nav>
  );
}
