import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Experience = () => {
  const experiences = [
    {
      position: "Software Engineer",
      company: "Multiblity (Pvt) Ltd",
      duration: "Nov 2024 – Sep 2026",
      description:
        "Built and maintained full-stack insurance applications with Laravel, PHP, Vue.js, Inertia.js, Livewire, Tailwind CSS, MySQL/PostgreSQL, and REST APIs. Delivered motor claims, policy, payment, document, and approval workflows with secure authentication, OCR/PDF automation, bulk processing, queues, integrations, and Python RPA.",
    },
    {
      position: "Associate Software Engineer",
      company: "Innovay",
      duration: "2024",
      description:
        "Built web applications using PHP, Laravel, WordPress, and frontend technologies. Delivered CRUD modules, database-driven workflows, maintenance tasks, and application enhancements while collaborating across teams.",
    },
    {
      position: "Software Engineering Intern",
      company: "Creo 360",
      duration: "Dec 2022 – Jul 2023",
      description:
        "Applied software engineering fundamentals to development, debugging, testing, and technical problem resolution while contributing to real-world team workflows.",
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
