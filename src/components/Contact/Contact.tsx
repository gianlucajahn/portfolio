import React, { useContext } from 'react';
import { store } from '../../App';
import { ReactComponent as LinkedIn } from "../../assets/images/linkedin.svg";
import { ReactComponent as GitHub } from "../../assets/images/github-mark.svg";
import { ReactComponent as Twitter } from "../../assets/images/twitter.svg";
import { ReactComponent as WhatsApp } from "../../assets/images/whatsapp.svg";
import toast, { Toaster } from "react-hot-toast";
import ContactForm from '../ContactForm/ContactForm';
import './Contact.scss';

export default function Contact () {
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
        <h3 className="eyebrow">{state.language === "english" ? "Kontakt" : "Contact"}</h3>
        <h1 className="heading">{state.language === "english" ? "Meine Kontakt-Daten." : "My contact information."}</h1>

        <p>{state.language === "english" ? "Füllen Sie das Formular auf der linken Seite mit Ihren Informationen aus und ich werde mich so schnell wie möglich bei Ihnen melden. Alternativ können Sie mich auch auf den rechts aufgeführten Plattformen finden." : "Fill in the form on the left with your information and I will get back to you as soon as possible. Alternatively, you can find me on the platforms listed on the right."}</p>

        <div className="contact-data">
            <ContactForm />

            <section className="contact-socials-container">
                <button className="contact-socials-item linkedin">
                    <LinkedIn className="svg" />
                    LinkedIn
                </button>

                <button className="contact-socials-item github">
                    <GitHub className="svg" />
                    GitHub
                </button>

                <button className="contact-socials-item twitter">
                    <Twitter className="svg" />
                    Twitter
                </button>

                <button className="contact-socials-item whatsapp">
                    <WhatsApp className="svg" />
                    WhatsApp
                </button>

                <button className="email" onClick={copyEmail}>
                    {state.language === "english" ? "E-Mail kopieren" : "Copy my email"}
                </button>
            </section>
        </div>
    </div>
  );
}

