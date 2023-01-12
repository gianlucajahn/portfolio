import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import "./Showcase.scss";

export default function Showcase() {
  const [state, dispatch] = useContext(store);

  return (
    <div className="container-showcase">
      <div className="showcase-left">
        <motion.h3
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >{state.language === "english" ? "Ein kleiner Einblick in meine Arbeit" : "A little insight into my work"}</motion.h3>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          {state.language === "english" ? "Egal ob aufwendig animierte oder strukturell komplexe Projekte, in meinem Portfolio finden Sie beides - denn ein guter Entwickler sollte beides drauf haben." : "Whether elaborately animated or structurally complex projects, you'll find both in my portfolio - because a good developer should be able to pull off both."}
        </motion.p>
      </div>

      <div className="showcase-right">
        <img
          className="screen"
          src={require("../../assets/images/screen5.png")}
        />
        <iframe className="video" src="https://streamable.com/e/1ehwwr?autoplay=1&nocontrols=1" style={{ border: "none", borderRadius: "2px" }} allow="autoplay"></iframe>
      </div>
    </div>
  );
}
