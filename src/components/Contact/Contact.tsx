import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './Contact.scss';

export default function Contact () {
  return (
    <div className="contact-container">
        <h3 className="eyebrow">Kontakt</h3>
        <h1 className="heading">Meine <br/>Kontakt-Daten.</h1>

        <p>Füllen Sie das Formular auf der linken Seite mit Ihren Informationen aus und ich werde mich so schnell wie möglich bei Ihnen melden.
        Alternativ können Sie mich auch auf den rechts aufgeführten Plattformen finden.</p>

        <div className="contact-data">
            <ContactForm />

            <section className="contact-socials">

            </section>
        </div>
    </div>
  );
}

