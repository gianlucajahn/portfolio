import React, { useContext, useRef } from 'react';
import { store } from '../../App';
import { motion } from "framer-motion";
import './IntroCards.scss';

export default function IntroCards () {
  const [state, dispatch] = useContext(store);
  const scrollRef = useRef(null);

  return (
    <div className="container-intro">
      <section className={`left-intro big-card ${state.darkmode ? "dark-card" : "light-card"}`}>
        <h3 className={`${state.darkmode ? "dark-heading" : "light-heading"}`}>{state.language === "english" ? "React-Entwickler an der Schnittstelle von Design und Code." : "React developer at the intersection between design and code"}</h3>
        <p className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "Angefangen mit HTML, CSS und JavaScript habe ich mir eigenständig das Programmieren beigebracht. Auch jenseits von JavaScript gibt es vieles zu entdecken: Heute arbeite ich mit TypeScript in React, verwende Redux oder Context zum State-Management und nutze SASS als Pre-Processor für CSS. Wie man sieht arbeite ich desweiteren gern mit Motion Libraries - bspw. Framer Motion." : "Starting with HTML, CSS and JavaScript, I taught myself programming on my own. However, nowadays there is a lot to discover far beyond vanilla JavaScript: Today I work with TypeScript in React, use Redux or Context for state management and use SASS as a pre-processor for CSS. As you can see, I also like to work with motion libraries - e.g. Framer Motion."}</p>
      </section>

      <section className="right-intro" ref={scrollRef}>
        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num green">200</h2>
                <h2 className="sign green-sign">+</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>GitHub Stars</h4>
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num place blue">{state.language === "english" ? "1. Platz" : "1st place"}</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? `meistgeliketes Projekt auf "The Odin Project"` : `most liked project thread of "The Odin Project"`}</h4>
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num purple">15</h2>
                <h2 className="sign purple-sign">+</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "Projekte" : "Projects"}</h4>  
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num red">100</h2>
                <h2 className="sign percent red-sign">%</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "Leidenschaft" : "passion"}</h4>
        </motion.div>
      </section>
    </div>
  );
}
