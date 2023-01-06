import React from 'react';
import './EndCards.scss';

export default function EndCards () {
  return (
    <div className="container-cards">
        <div className="left-card card">
            <h3>Sauberer Code</h3>
            <img className="code" src={require("../../assets/images/cleancode.PNG")} />
        </div>

        <div className="right-card card">
            <h3>Entwicklungsdauer</h3>

            <div className="card-content">
              <div className="dev-speed-line" />
              <h2 className="dev-speed months">Monate</h2>
              <h2 className="dev-speed weeks">Wochen</h2>
            </div>
        </div>
    </div>
  );
}
