import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import { ReactComponent as LinkedIn } from "../../assets/images/linkedin.svg";
import { ReactComponent as GitHub } from "../../assets/images/github-mark.svg";
import { ReactComponent as Twitter } from "../../assets/images/twitter.svg";
import { ReactComponent as WhatsApp } from "../../assets/images/whatsapp.svg";
import toast, { Toaster } from "react-hot-toast";
import ContactForm from "../ContactForm/ContactForm";
import "./Contact.scss";

export default function Contact() {
  const [state, dispatch] = useContext(store);

  const copyEmail = () => {
    navigator.clipboard.writeText("gianluca.jahn98@gmail.com");
    toast(state.language === "english" ? "E-Mail kopiert!" : "Copied E-Mail!", {
      icon: "📧",
      position: "top-left",
      style: {
        border: "1px solid #ebebeb",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
        borderRadius: "28px",
        fontFamily: "Inter",
        color: "#1d1d1f",
        fontSize: "14px",
      },
    });
  };

  return (
    <div className="contact-container">
      <motion.h3
        className="eyebrow"
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        {state.language === "english" ? "Kontakt" : "Contact"}
      </motion.h3>
      <motion.h1
        className="heading"
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        {state.language === "english"
          ? "Meine Kontakt-Daten."
          : "My contact information."}
      </motion.h1>

      <p>
        {state.language === "english"
          ? "Füllen Sie das Formular auf der linken Seite mit Ihren Informationen aus und ich werde mich so schnell wie möglich bei Ihnen melden. Alternativ können Sie mich auch auf den rechts aufgeführten Plattformen finden."
          : "Fill in the form on the left with your information and I will get back to you as soon as possible. Alternatively, you can find me on the platforms listed on the right."}
      </p>

      <div className="contact-data">
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ opacity: { duration: 0.3, delay: 0.3 }, x: { duration: 0.8, type: "spring", delay: 0.25 } }}
        >
          <ContactForm />
        </motion.div>

        <motion.section
          className="contact-socials-container"
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ opacity: { duration: 0.3, delay: 0.3 }, x: { duration: 0.8, type: "spring", delay: 0.25 } }}
        >
          <a target="_blank" href="https://www.linkedin.com/in/gianlucajahn/">
            <button className="contact-socials-item linkedin">
              <LinkedIn className="svg" />
              LinkedIn
            </button>
          </a>

          <a target="_blank" href="https://github.com/gianlucajahn">
            <button className="contact-socials-item github">
              <GitHub className="svg" />
              GitHub
            </button>
          </a>

          <a target="_blank" href="https://twitter.com/GianlucaJahn">
            <button className="contact-socials-item twitter">
              <Twitter className="svg" />
              Twitter
            </button>
          </a>

          <a target="_blank" href="https://wa.me/+4915233760445">
            <button className="contact-socials-item whatsapp">
              <WhatsApp className="svg" />
              WhatsApp
            </button>
          </a>

          <button className="email" onClick={copyEmail}>
            {state.language === "english" ? "E-Mail kopieren" : "Copy my email"}
          </button>
        </motion.section>
      </div>
    </div>
  );
}
