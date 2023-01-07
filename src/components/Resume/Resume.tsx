import React, { useContext } from 'react';
import './Resume.scss';
import { motion } from 'framer-motion';
import { store } from '../../App';
import { ReactComponent as Download } from "../../assets/images/download.svg";
import { ReactComponent as Contact } from "../../assets/images/contact.svg";

export default function Resume () {
  const [state, dispatch] = useContext(store);

  return (
    <div className="resume-container">
        <div className="anchor" id="resume" />
        <motion.h3 className="eyebrow"
          initial={{ y: 350 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
        >{state.language === "english" ? "Lebenslauf" : "Resume"}</motion.h3>
        <motion.h1 className="heading"
            initial={{ y: 300 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
        >{state.language === "english" ? "Interesse an einem Gespräch?" : "Interested in working with me?"}</motion.h1>

        <div className="resume-box">
            <div className="resume-box-left">
                <img className="cta" src={require("../../assets/images/cta.png")} />
            </div>

            <div className="resume-box-right">
                <p>{state.language === "english" ? "Sollten Sie Interesse haben, kontaktieren Sie mich gern jederzeit. Hier können Sie außerdem meinen Lebenslauf herunterladen." : "Should you still have any questions, feel free to contact me. Additionally, you can download my resume below."}</p>
                <button className="download">
                    <Download className="download-svg svg" style={{ height: "22px" }} />
                    Download CV
                </button>

                <button className="contact">
                    <Contact className="contact-svg svg" style={{ height: "20px" }} />
                    {state.language === "english" ? "Kontakt-Daten" : "Contact me"}
                </button>
            </div>
        </div>
    </div>
  );
}
