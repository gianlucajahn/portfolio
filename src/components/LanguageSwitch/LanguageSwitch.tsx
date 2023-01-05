import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LanguageSwitch.scss";

export default function LanguageSwitch() {
  const [language, setLanguage] = useState<string>("english");

  return (
    <motion.button
      className="btn-language"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.7 }}
    >
      <img src={require(`../../assets/images/${language}.png`)} />
      Translate to English
    </motion.button>
  );
}
