import React from "react";
import "./MyWork.css";

const MyWork = () => {
  const projects = [
    {
      name: "JobArmer",
      description:
        " JobArmer is the ultimate solution designed to streamline and simplify the way service contractors to manage field workforce. ",
      link: "https://jobarmer.com/",
    },
    {
      name: "AI Powered Travel Recommendation System",
      description:
        "  This research project proposes the development of a personalized travel recommendation system that caters to individual traveler's unique needs and preferences.",
      link: "https://github.com/R-Tharsh",
    },
    {
      name: "Thalsevena Beach Resort Management System",
      description:
        " This is a full web application. We used Java, SERVELETS ,JSP,  HTML, CSS, Bootstrap and MySQL for develop this system & our project contains eight sub-systems",
      link: "https://github.com/R-Tharsh/Beach-Resort-Management-System---Y2-S2-",
    },
    {
      name: "Online Laundry Management System",
      description:
        "This is a full web application. We used React, Express js, Node js and MongoDB for develop this web application. Our project contains user site, admin site, manager site, deliverer site and worker site.",
      link: "https://github.com/bSathursan/Washapp-SPM-SER043",
    },
    {
      name: "Portfolio Website",
      description:
        "A personal portfolio built with React and Vite. Showcasing my web development skills and projects.",
      link: "https://github.com/R-Tharsh/SE_Portfolio",
    },
  ];

  return (
    <div className="projects-section" id="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-card-content">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
