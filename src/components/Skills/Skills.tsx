import React, { useContext } from 'react';
import { store } from '../../App';
import './Skills.scss';
import { motion } from "framer-motion";

export default function Skills () {
  const [state, dispatch] = useContext(store);

  return (
    <div className="skills-container">
        <h3 className="eyebrow">Skills</h3>
        <h1 className="heading">{state.language === "english" ? "Technologien, mit denen ich arbeite." : "Everything I use to turn an idea into reality."}</h1>

        <div className="skill-grid">
            
        </div>
    </div>
  );
}
