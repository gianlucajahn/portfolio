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
    if (language !== null && language !== undefined) {
      dispatch({
        type: 'language/INIT',
        payload: language
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
    setTimeout(() => {
        window.location.reload();
      }, 100)
  }, [renderAmount])

  const switchLanguage = (e: React.MouseEvent) => {
    dispatch({
        type: 'language/SET'
    });
  }

  return (
    <motion.button
      className="btn-language"
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      onClick={switchLanguage}
    >
      <img src={require(`../../assets/images/${state.language}.png`)} />
      Translate to {state.language === "english" ? "English" : "German"}
    </motion.button>
  );
}
