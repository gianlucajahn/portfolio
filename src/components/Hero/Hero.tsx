import React from 'react';
import './Hero.scss';

export default function Hero () {
  return (
    <div className="container-hero">
        <div className="container-avatar">
            <img className="img-avatar" src={require("../../assets/images/hero.png")} />
        </div>

        <h2 className="name">Gianluca Jahn</h2>
        <h1 className="title">Frontend-Entwickler</h1>
        <h4>Freund des kreativen Prozesses, lebenslangen Lernens und des ständigen Wandels der Frontend-Welt.</h4>
        <button>
            <h3>Mehr erfahren</h3>
            <img src={require("../../assets/images/arrow.png")} />
        </button>
    </div>
  );
}
