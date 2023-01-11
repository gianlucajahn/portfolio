import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

export default function ContactForm() {
  const form = useRef<any>(null);

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
          placeholder="Ihr Name"
        />
        <input
          className="field"
          type="email"
          name="user_email"
          placeholder="Ihre E-Mail-Adresse"
        />
      </div>
      <textarea
        name="message"
        placeholder="Ihre Nachricht an mich"
        className="field"
      />
      <input type="submit" value="Absenden" className="submit" />
    </form>
  );
}
