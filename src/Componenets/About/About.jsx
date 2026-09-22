import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title"><h1>About Me</h1><img src={theme_pattern} alt="" /></div>
      <div className="about-sections">
        <div className="about-left"><img src={profile_img} alt="Robert Tharshan" /></div>
        <div className="about-right">
          <div className="about-para">
            <p>I’m a Software Engineer with nearly 3 years of professional experience building full-stack web applications, insurance platforms, workflow automation, and API-driven systems.</p>
            <p>My work spans backend services, frontend interfaces, databases, integrations, document automation, OCR validation, and reliable concurrent processing. I hold a BSc (Hons) in Information Technology, specializing in Software Engineering, from SLIIT.</p>
          </div>
          <div className="about-skills">
            <div className="skill-group">
              <h3>Backend</h3>
              <div className="skill-tags"><span>Laravel</span><span>PHP 8</span><span>REST APIs</span><span>Laravel Sanctum</span></div>
            </div>
            <div className="skill-group">
              <h3>Frontend</h3>
              <div className="skill-tags"><span>Vue.js</span><span>React.js</span><span>Inertia.js</span><span>Livewire</span><span>Tailwind CSS</span></div>
            </div>
            <div className="skill-group">
              <h3>Data & Automation</h3>
              <div className="skill-tags"><span>MySQL</span><span>PostgreSQL</span><span>Python RPA</span><span>OCR</span><span>PDF Automation</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement"><h1>3+</h1><p>Years of experience</p></div><hr />
        <div className="about-achievement"><h1>5</h1><p>Selected projects</p></div><hr />
        <div className="about-achievement"><h1>4</h1><p>Core specialties</p></div><hr />
      </div>
    </div>
  );
};

export default About;
