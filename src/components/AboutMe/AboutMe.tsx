import React, { useContext } from 'react';
import { store } from '../../App';
import IntroCards from '../IntroCards/IntroCards';
import './AboutMe.scss';

export default function AboutMe () {
  const [state, dispatch] = useContext(store);

  return (
    <div className="container-aboutme">
      <h3 className="eyebrow start">Über mich</h3>
      <h1 className="heading start">Mein Tech Stack und Expertise.</h1>

      <IntroCards />
    </div>
  );
}
