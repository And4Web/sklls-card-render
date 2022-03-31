import React from "react";
import Skill from "./skill/skill.component";
import "./skillCards.styles.css";

export default SkillCards = (props) => {
  const skillsList = props.skills;
  return (
    <div>
      <div className="skillCards">
        {skillsList.map((skill) => (
          <Skill id={skill.id} src={skill.src} name={skill.name} />
        ))}
      </div>
    </div>
  );
};
