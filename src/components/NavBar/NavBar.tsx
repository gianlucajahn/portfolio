import React from 'react';
import './NavBar.scss';

export default function NavBar () {
  return (
    <nav>
        <img src={require("../../assets/images/icon.jpg")}  />
        <h3 className="first">Über mich</h3>
        <h3>Portfolio</h3>
        <h3>Skills</h3>
        <h3>Lebenslauf</h3>
        <button className="btn-nav" type="button">Kontakt</button>
    </nav>
  );
}

