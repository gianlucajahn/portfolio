import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LanguageSwitch.scss";

export default function LanguageSwitch() {
  const [language, setLanguage] = useState<string>("english");

  return (
    <motion.button
      className="btn-language"
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      onClick={() => setLanguage(lang => lang === "english" ? "german" : "english")}
    >
      <img src={require(`../../assets/images/${language}.png`)} />
      Translate to {language === "english" ? "English" : "German"}
    </motion.button>
  );
}
