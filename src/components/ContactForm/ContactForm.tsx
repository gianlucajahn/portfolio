import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";
import { store } from "../../App";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const form = useRef<any>(null);
  const [state, dispatch] = useContext(store);
  const input1 = useRef(null), input2 = useRef(null), input3 = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    toast.success(state.language === "english" ? "Nachricht abgeschickt!" : "Message sent!", {
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

    // clear fields after submitting message
    let fields = document.getElementsByClassName('field');
    let field1 = fields[0] as HTMLInputElement, field2 = fields[1] as HTMLInputElement, field3 = fields[2] as HTMLTextAreaElement;
    field1.value = "";
    field2.value = "";
    field3.value = "";
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form-container">
      <div className="input-container">
        <input
          ref={input1}
          className="field"
          type="text"
          name="user_name"
          placeholder={state.language === "english" ? "Ihr Name" : "Your name"}
          required
        />
        <input
          ref={input2}
          className="field"
          type="email"
          name="user_email"
          placeholder={state.language === "english" ? "Ihre E-Mail-Adresse" : "Your email address"}
          required
        />
      </div>
      <textarea
        ref={input3}
        name="message"
        placeholder={state.language === "english" ? "Ihre Nachricht an mich" : "Your message for me"}
        className="field"
        required
      />
      <input type="submit" value={state.language === "english" ? "Absenden" : "Submit"} className="submit" />
    </form>
  );
}
