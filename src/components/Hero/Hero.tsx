import React, { useContext } from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import { store } from "../../App";
import scroll from "../../utils/helpers/scroll";

export default function Hero() {
  const [state, dispatch] = useContext(store);

  return (
    <div className="container-hero">
      <div className="anchor" id="hero" />
      <motion.div
        className="container-avatar"
        initial={{ opacity: 0, y: 350 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <img
          className="img-avatar"
          src={require("../../assets/images/avatar_test.png")}
        />
      </motion.div>

      <motion.h2
        className="name"
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          opacity: { duration: 0.2, type: "tween" },
          y: { duration: 0.55, type: "spring" },
        }}
      >
        Gianluca Jahn
      </motion.h2>

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.29,
          opacity: { duration: 0.2, type: "tween" },
          y: { duration: 0.6, type: "spring" },
        }}
      >
        {state.language === "english" ? "Frontend-Entwickler" : "Frontend Developer"}
      </motion.h1>

      <motion.h4
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          opacity: { duration: 0.15, type: "tween" },
          y: { duration: 0.55, type: "spring" },
        }}
      >
        {state.language === "english" ? "Fan von kreativen Prozessen, lebenslangem Lernen und des ständigen Wandels der Frontend-Welt." : "I believe in creative processes & lifelong learning. I am always curious for new best practices and workflows."}
      </motion.h4>

      <motion.button
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          opacity: { duration: 0.15, type: "tween" },
          y: { duration: 0.4, type: "spring" },
        }}
      >
        <h3 onClick={(e) => scroll("about-me")}>{state.language === "english" ? "Mehr erfahren" : "Find out more"}</h3>
        <img src={require("../../assets/images/arrow.png")} />
      </motion.button>
    </div>
  );
}
