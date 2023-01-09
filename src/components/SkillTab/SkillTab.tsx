import React from "react";
import returnTabName from "../../utils/helpers/returnTabName";
import "./SkillTab.scss";

export interface SkillTabProps {
  topic: string;
}

export default function SkillTab(props: SkillTabProps) {
  const { topic } = props;

  return (
    <div className="skill-tab-container">
      <h3>{returnTabName(topic)}</h3>
      {topic === "languages" ? <div></div> : null}
      {topic === "frameworks" ? <div></div> : null}
      {topic === "libraries" ? <div></div> : null}
      {topic === "collaborative" ? <div></div> : null}
      {topic === "prototyping" ? <div></div> : null}
      {topic === "code" ? <div></div> : null}
      {topic === "learning" ? <div></div> : null}
    </div>
  );
}
