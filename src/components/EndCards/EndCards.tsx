import React from "react";
import "./EndCards.scss";
import { motion } from "framer-motion";

export default function EndCards() {
  return (
    <div className="container-cards">
      <div className="left-card card">
        <h3 className="clean">Sauberer Code</h3>
        <img
          className="code"
          src={require("../../assets/images/cleancode.PNG")}
        />
      </div>

      <div className="right-card card">
        <h3>Performance-Optimierung</h3>
        <p>via Google Lighthouse</p>

        <div className="card-content">
          <motion.img
            className="performance-node perf"
            src={require("../../assets/images/performance.PNG")}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          />
          <motion.img
            className="performance-node acc"
            src={require("../../assets/images/accessibility.png")}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
          <motion.img
            className="performance-node best"
            src={require("../../assets/images/bestpractices.png")}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          />
          <motion.img
            className="performance-node seo"
            src={require("../../assets/images/seo.png")}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          />
        </div>
      </div>
    </div>
  );
}
