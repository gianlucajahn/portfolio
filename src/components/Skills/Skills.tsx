import React, { useContext } from "react";
import { store } from "../../App";
import "./Skills.scss";
import SkillTab from "../SkillTab/SkillTab";

export default function Skills() {
  const [state, dispatch] = useContext(store);

  return (
    <div className={`skills-container ${state.darkmode ? "dark-bg-2" : "light-bg-2"}`}>
      <div className="anchor" id="skills" />
      <h3 className={`eyebrow ${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>Skills</h3>
      <h1 className={`heading ${state.darkmode ? "dark-heading" : "light-heading"}`}>
        {state.language === "english"
          ? "Technologien, mit denen ich arbeite."
          : "Everything I use to turn an idea into reality."}
      </h1>

      <div className="skill-grid">
        <div className="skill-grid-first-row">
          <SkillTab topic="languages" />
        </div>
        <div className="skill-grid-second-row">
          <SkillTab topic="frameworks" />
          <SkillTab topic="libraries" />
        </div>
        <div className="skill-grid-third-row">
          <SkillTab topic="collaborative" />
          <SkillTab topic="prototyping" />
          <SkillTab topic="code" />
        </div>
      </div>
    </div>
  );
}
