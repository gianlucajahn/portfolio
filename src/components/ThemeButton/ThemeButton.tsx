import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import { ReactComponent as Dark } from "../../assets/images/dark.svg";
import { ReactComponent as Light } from "../../assets/images/light.svg";
import "./ThemeButton.scss";

export default function ThemeButton() {
  const [state, dispatch] = useContext(store);

  const toggleTheme = () => {
    dispatch({
      type: "darkmode/TOGGLE",
    });
  };

  return (
    <motion.button
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 0.5, delay: 0.3 }}
      className={`theme-button ${
        state.darkmode ? "dark-theme-button" : "light-theme-button"
      }`}
      onClick={toggleTheme}
    >
      {state.darkmode ? <Light className="light-icon" /> : <Dark className="dark-icon" />}
      <h4>{state.language === "english"
        ? state.darkmode
          ? "Licht einschalten"
          : "Licht ausschalten"
        : state.darkmode
        ? "Turn on lights"
        : "Turn off lights"}</h4>
    </motion.button>
  );
}
