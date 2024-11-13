import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import experience_icon from "../../assets/call_icon.svg";

const Experience = () => {
  const experiences = [
    {
      position: "Associate Software Engineer",
      company: "Innovay Pvt Ltd",
      duration: "Jan 2024 - April 2024",
      description:
        "Working on web applications using PHP, Laravel, and WordPress, and delivering high-quality software solutions.",
    },
    {
      position: "Intern Software Engineer",
      company: "Creo 360",
      duration: "Dec 2022 - June 2023",
      description:
        "Developed and maintained responsive websites with React, ensuring cross-browser compatibility and enhanced user experience.",
    },
    {
      position: "Web Developer",
      company: "Gypzeez",
      duration: "June 2021 - May 2022",
      description:
        "Gained practical experience in full-stack development by working on internal projects and collaborating with senior engineers.",
    },
  ];

  return (
    <div className="experience-section" id="experience">
      <div className="experience-title">
        <h1>My Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-content">
              <h2>{exp.position}</h2>
              <h3>{exp.company}</h3>
              <p className="experience-duration">{exp.duration}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
