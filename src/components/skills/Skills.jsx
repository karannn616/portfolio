import React from "react";
import "./skills.css";
import { skills } from "../Data";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Professional Skills</h2>
      <h3 className="section__subtitle">What I know</h3>

      <div className="skills__container container grid">
        {skills.map(({ name, percentage, description }, index) => {
          return (
            <div className="skills__item">
              <div className="skills__titles">
                <h3 className="skills__name">{name}</h3>
                <span className="skills_number">
                  {percentage} <span>%</span>
                </span>
              </div>

              <p className="skills__desc">{description}</p>

              <div className="skills__bar">
                <span
                  className="skills__perc"
                  style={{ width: `${percentage}%` }}
                >
                  <span></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
