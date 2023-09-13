import React, { useState } from "react";
import "./qualification.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Qualification() {
  const [toggleTime, setToggleTime] = useState(false);
  return (
    <section className="qualification__section section" id="qualifications">
      <h2 className="section__title">Qualification</h2>
      <h3 className="section__subtitle">Walk Through</h3>

      <div className="qualiication__container container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "3rem",
            cursor: "pointer",
          }}
        >
          <div
            className="button button__flex"
            onClick={() => setToggleTime(!toggleTime)}
          >
            {toggleTime ? <h4>Education</h4> : <h4>Experience</h4>}
          </div>
        </div>
        {toggleTime ? (
          <div className="experience">
            <VerticalTimeline lineColor="#333333">
              <VerticalTimelineElement
                className="vertical-timeline-element--education timeline__element"
                date="2017-2019"
                iconStyle={{ backgroundColor: "#333333", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Fr. Agnel Tech High School
                </h3>
                <p>Secondary School Certificate</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education timeline__element"
                date="2019-2021"
                iconStyle={{ backgroundColor: "#333333", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  St. Andrews College of Arts, Science and Commerce
                </h3>
                <p>High School Certificate</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--education timeline__element"
                date="2021-Present"
                iconStyle={{ backgroundColor: "#333333", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">PVPPCOE</h3>
                <p>Bachelors in Engineering</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        ) : (
          <div className="experience">
            <VerticalTimeline lineColor="#000">
              <VerticalTimelineElement
                className="vertical-timeline-element--education timeline__element"
                date="March 2023 - June 2023"
                iconStyle={{ backgroundColor: "#333333", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Getfly Technologies
                </h3>
                <p>Intern</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--education timeline__element"
                date="July 2023 - Present"
                iconStyle={{ backgroundColor: "#333333", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Getfly Technologies
                </h3>
                <p>Software Intern</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        )}
      </div>
    </section>
  );
}

export default Qualification;
