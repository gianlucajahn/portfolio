import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";
import { store } from "../../App";

export default function ContactForm() {
  const form = useRef<any>(null);
  const [state, dispatch] = useContext(store);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_86bzfe9",
        "template_49nz1ih",
        form.current,
        "kQZ-nxxKbc_syZcW1"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form-container">
      <div className="input-container">
        <input
          className="field"
          type="text"
          name="user_name"
          placeholder={state.language === "english" ? "Ihr Name" : "Your name"}
        />
        <input
          className="field"
          type="email"
          name="user_email"
          placeholder={state.language === "english" ? "Ihre E-Mail-Adresse" : "Your email address"}
        />
      </div>
      <textarea
        name="message"
        placeholder={state.language === "english" ? "Ihre Nachricht an mich" : "Your message for me"}
        className="field"
      />
      <input type="submit" value={state.language === "english" ? "Absenden" : "Submit"} className="submit" />
    </form>
  );
}
