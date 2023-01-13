import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./LanguageSwitch.scss";
import { store } from "../../App";

export default function LanguageSwitch() {
  const [state, dispatch] = useContext(store);
  const [time, setTime] = useState(new Date().valueOf());
  const [renderAmount, setRenderAmount] = useState(0);

  useEffect(() => {
    let language = localStorage.getItem("language");
    let darkmode = localStorage.getItem("darkmode");
    if (language !== null && language !== undefined) {
      dispatch({
        type: 'language/INIT',
        payload: language
      });
    }
    if (darkmode !== null && darkmode !== undefined) {
      dispatch({
        type: 'darkmode/INIT',
        payload: darkmode
      });
    }
  }, [])

  useEffect(() => {
    setRenderAmount(renderAmount + 1);
  }, [state.language])

  useEffect(() => {
    let loadedSeconds = (new Date().valueOf() - time);
    if (loadedSeconds < 300) {
        return;
    }
    localStorage.setItem("language", state.language);
    localStorage.setItem("darkmode", state.darkmode);
    window.location.reload();
  }, [renderAmount])

  const switchLanguage = (e: React.MouseEvent) => {
    dispatch({
        type: 'language/SET'
    });
  }

  return (
    <motion.button
      className={`btn-language ${state.darkmode ? "dark-language-button" : "light-language-button"}`}
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      onClick={switchLanguage}
    >
      <img src={require(`../../assets/images/${state.language}.png`)} />
      Translate to {state.language === "english" ? "English" : "German"}
    </motion.button>
  );
}
