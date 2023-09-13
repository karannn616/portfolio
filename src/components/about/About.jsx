import React from "react";
import "./about.css";
import ProfileImg from "../../assets/pp.jpeg";
import Info from "./Info";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={ProfileImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Web Developer, I try to create what you can barely call web pages. I
            ty my best. Please bare with me
          </p>

          <a download="" href={ProfileImg} className="button button__flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
