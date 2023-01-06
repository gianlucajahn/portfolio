import React, { useContext } from 'react';
import { store } from '../../App';
import { motion } from "framer-motion";
import IntroCards from '../IntroCards/IntroCards';
import './AboutMe.scss';

export default function AboutMe () {
  const [state, dispatch] = useContext(store);

  return (
    <div className="container-aboutme">
      <motion.h3 className="eyebrow start"
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >{state.language === "english" ? "Über mich" : "About Me"}</motion.h3>
      <motion.h1 className="heading start"
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >{state.language === "english" ? "Mein Tech Stack und Expertise." : "My tech stack and expertise."}</motion.h1>

      <IntroCards />
    </div>
  );
}
