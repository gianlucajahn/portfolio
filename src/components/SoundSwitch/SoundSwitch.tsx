import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import { ReactComponent as Sound } from "../../assets/images/sound.svg";
import { ReactComponent as SoundOff } from "../../assets/images/soundoff.svg";
import "./SoundSwitch.scss";

export default function ThemeButton() {
  const [state, dispatch] = useContext(store);

  const toggleSound = () => {
    dispatch({
        type: 'sounds/TOGGLE'
    });
  }

  return (
    <motion.button
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 0.5, delay: 0.3 }}
      className={`sound-button ${
        state.darkmode ? "dark-theme-button" : "light-theme-button"
      }`}
      onClick={toggleSound}
    >
      {state.darkmode ? <SoundOff className="light-icon" /> : <Sound className="dark-icon" />}
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
