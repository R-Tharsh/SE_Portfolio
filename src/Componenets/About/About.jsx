import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              "I’m a highly motivated software engineer with a Bachelor’s degree
              in Information Technology, specializing in Software Engineering.
            </p>
            <p>
              Over the past few years, I’ve honed my skills in both frontend and
              backend development, working with technologies such as React, PHP,
              Laravel, and WordPress.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Laravel & PHP</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>WordPress</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
