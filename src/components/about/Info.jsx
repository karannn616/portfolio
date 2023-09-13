import React from "react";

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="uil uil-medal about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Bare Minimum</span>
      </div>

      <div className="about__box">
        <i class="uil uil-check-circle about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">Basic Projects</span>
      </div>

      <div className="about__box">
        <i class="uil uil-desktop-cloud-alt about__icon"></i>
        <h3 className="about__title">Online?</h3>
        <span className="about__subtitle">Always</span>
      </div>
    </div>
  );
}

export default Info;
