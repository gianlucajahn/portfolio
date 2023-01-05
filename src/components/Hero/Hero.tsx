import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="container-hero">
      <motion.div
        className="container-avatar"
        initial={{ opacity: 0, y: 350 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <img
          className="img-avatar"
          src={require("../../assets/images/hero.png")}
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
        Frontend-Entwickler
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
        Freund des kreativen Prozesses, lebenslangen Lernens und des ständigen
        Wandels der Frontend-Welt.
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
        <h3>Mehr erfahren</h3>
        <img src={require("../../assets/images/arrow.png")} />
      </motion.button>
    </div>
  );
}
