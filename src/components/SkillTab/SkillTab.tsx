import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import returnTabName from "../../utils/helpers/returnTabName";
import Image from "../Image/Image";
import "./SkillTab.scss";

export interface SkillTabProps {
  topic: string;
}

export default function SkillTab(props: SkillTabProps) {
  const { topic } = props;
  const [state, dispatch] = useContext(store);

  return (
    <motion.div
      className={`skill-tab-container ${state.darkmode ? "dark-card" : "light-card"}`}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: topic === "libraries" ? 0.35 : topic === "prototyping" ? 0.35 : topic === "code" ? 0.65 : 0.05 }}
    >
      <h3 className={`head ${state.darkmode ? "white" : ""}`}>{returnTabName(topic, state.language)}</h3>
      {topic === "languages" ? (
        <div className="skill-tab-list languages">
          <Image source="typescript" name="TypeScript" />
          <Image source="javascript" name="JavaScript" />
          <Image source="sass" name="SASS/SCSS" />
          <Image source="css" name="CSS" />
          <Image source="html" name="HTML" />
          <Image source="python" name="Python" />
        </div>
      ) : null}
      {topic === "frameworks" ? (
        <div className="skill-tab-list">
          <Image source="react" name="React" />
          <Image source={state.darkmode ? "next_2" : "next"} name="Next.js" />
          <Image source="tailwind" name="TailwindCSS" />
        </div>
      ) : null}
      {topic === "libraries" ? (
        <div className="skill-tab-list">
          <Image source="redux" name="Redux" />
          <Image source="framermotion" name="Framer Motion" />
          <Image source="chakraui" name="Chakra UI" />
        </div>
      ) : null}
      {topic === "collaborative" ? (
        <div className="skill-tab-list">
          <Image source="git" name="Git" />
          <Image source="github" name="GitHub" />
        </div>
      ) : null}
      {topic === "prototyping" ? (
        <div className="skill-tab-list">
          <Image source="figma" name="Figma" />
          <Image source="photoshop" name="Adobe Photoshop" />
        </div>
      ) : null}
      {topic === "code" ? (
        <div className="skill-tab-list one-item">
          <Image source="vscode" name="VSCode" />
        </div>
      ) : null}
    </motion.div>
  );
}
